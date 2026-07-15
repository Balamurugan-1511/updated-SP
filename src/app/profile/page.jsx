'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AVAILABLE_COURSES = ['AI Fundamentals', 'Machine Learning', 'Deep Learning & Neural Networks', 'Generative AI & LLMs', 'AI for Business Leaders', 'NLP & Conversational AI'];
const COURSE_STATUSES = ['Enrolled', 'In Progress', 'Completed'];

const emptyProfile = {
  photo: '',
  fullName: '',
  education: '',
  bio: '',
  dob: '',
  gender: '',
  blogs: [],
  reviews: [],
  courses: [],
  privacyPublic: true
};

const generateId = () => `${Date.now()}-${Math.random()?.toString(36)?.slice(2, 8)}`;

const generateCertificateId = () => `SP-CERT-${new Date()?.getFullYear()}-${Math.random()?.toString(36)?.slice(2, 8)?.toUpperCase()}`;

export default function ProfilePage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [profile, setProfile] = useState(emptyProfile);
  const [editMode, setEditMode] = useState(false);
  const [draft, setDraft] = useState(emptyProfile);

  const [blogForm, setBlogForm] = useState({ title: '', content: '' });
  const [reviewForm, setReviewForm] = useState({ rating: 5, text: '' });
  const [courseForm, setCourseForm] = useState({ name: AVAILABLE_COURSES?.[0], status: 'Enrolled', progress: 0 });
  const [certificateView, setCertificateView] = useState(null);
  const [savedNotice, setSavedNotice] = useState('');
  const [savedJobs, setSavedJobs] = useState([]);
  const [pwForm, setPwForm] = useState({ current: '', next: '', confirm: '' });
  const [pwMessage, setPwMessage] = useState({ type: '', text: '' });

  const profileKey = useCallback(email => `skandaplus_profile_${email?.toLowerCase()}`, []);
  const savedJobsKey = useCallback(email => `skandaplus_saved_jobs_${email?.toLowerCase()}`, []);

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem('skandaplus_current_user') || 'null');
      setCurrentUser(user);
      if (user?.email) {
        const stored = JSON.parse(localStorage.getItem(profileKey(user?.email)) || 'null');
        const merged = { ...emptyProfile, ...(stored || {}), fullName: stored?.fullName || user?.firstName || '' };
        setProfile(merged);
        setDraft(merged);
        const jobs = JSON.parse(localStorage.getItem(savedJobsKey(user?.email)) || '[]');
        setSavedJobs(Array.isArray(jobs) ? jobs : []);
      }
    } catch (err) {
      setCurrentUser(null);
    }
    setCheckedAuth(true);
  }, [profileKey, savedJobsKey]);

  const persist = useCallback(next => {
    if (!currentUser?.email) return;
    localStorage.setItem(profileKey(currentUser?.email), JSON.stringify(next));
    setProfile(next);
  }, [currentUser, profileKey]);

  const flashSaved = msg => {
    setSavedNotice(msg);
    setTimeout(() => setSavedNotice(''), 2500);
  };

  const handlePhotoChange = e => {
    const file = e?.target?.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setDraft(prev => ({ ...prev, photo: reader?.result }));
    };
    reader?.readAsDataURL(file);
  };

  const handleDraftChange = e => {
    const { name, value } = e?.target;
    setDraft(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    persist(draft);
    setEditMode(false);
    flashSaved('Profile updated successfully.');
  };

  const handleCancelEdit = () => {
    setDraft(profile);
    setEditMode(false);
  };

  const handleAddBlog = e => {
    e?.preventDefault();
    if (!blogForm?.title?.trim() || !blogForm?.content?.trim()) return;
    const next = {
      ...profile,
      blogs: [{ id: generateId(), title: blogForm?.title, content: blogForm?.content, date: new Date()?.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }) }, ...(profile?.blogs || [])]
    };
    persist(next);
    setDraft(next);
    setBlogForm({ title: '', content: '' });
    flashSaved('Blog post added.');
  };

  const handleAddReview = e => {
    e?.preventDefault();
    if (!reviewForm?.text?.trim()) return;
    const next = {
      ...profile,
      reviews: [{ id: generateId(), rating: Number(reviewForm?.rating), text: reviewForm?.text, date: new Date()?.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }) }, ...(profile?.reviews || [])]
    };
    persist(next);
    setDraft(next);
    setReviewForm({ rating: 5, text: '' });
    flashSaved('Review submitted.');
  };

  const handleAddCourse = e => {
    e?.preventDefault();
    if (!courseForm?.name) return;
    const isCompleted = courseForm?.status === 'Completed';
    const next = {
      ...profile,
      courses: [{
        id: generateId(),
        name: courseForm?.name,
        status: courseForm?.status,
        progress: isCompleted ? 100 : Number(courseForm?.progress) || 0,
        completionDate: isCompleted ? new Date()?.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }) : '',
        certificateId: isCompleted ? generateCertificateId() : ''
      }, ...(profile?.courses || [])]
    };
    persist(next);
    setDraft(next);
    setCourseForm({ name: AVAILABLE_COURSES?.[0], status: 'Enrolled', progress: 0 });
    flashSaved('Course added to your learning activity.');
  };

  const handleUpdateCourseStatus = (courseId, status) => {
    const next = {
      ...profile,
      courses: (profile?.courses || [])?.map(c => {
        if (c?.id !== courseId) return c;
        const isCompleted = status === 'Completed';
        return {
          ...c,
          status,
          progress: isCompleted ? 100 : c?.progress,
          completionDate: isCompleted ? (c?.completionDate || new Date()?.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })) : '',
          certificateId: isCompleted ? (c?.certificateId || generateCertificateId()) : ''
        };
      })
    };
    persist(next);
    setDraft(next);
    flashSaved('Course status updated.');
  };

  const handleUnsaveJob = jobTitle => {
    const next = savedJobs?.filter(j => j?.title !== jobTitle);
    setSavedJobs(next);
    if (currentUser?.email) localStorage.setItem(savedJobsKey(currentUser?.email), JSON.stringify(next));
    flashSaved('Removed from saved jobs.');
  };

  const handleTogglePrivacy = () => {
    const next = { ...profile, privacyPublic: !profile?.privacyPublic };
    persist(next);
    setDraft(next);
    flashSaved(next?.privacyPublic ? 'Your activity is now visible to others.' : 'Your activity is now private.');
  };

  const handlePasswordChange = e => {
    const { name, value } = e?.target;
    setPwForm(prev => ({ ...prev, [name]: value }));
  };

  const handleChangePassword = e => {
    e?.preventDefault();
    setPwMessage({ type: '', text: '' });
    if (!pwForm?.current || !pwForm?.next || !pwForm?.confirm) {
      setPwMessage({ type: 'error', text: 'Please fill in all password fields.' });
      return;
    }
    if (pwForm?.next?.length < 6) {
      setPwMessage({ type: 'error', text: 'New password must be at least 6 characters.' });
      return;
    }
    if (pwForm?.next !== pwForm?.confirm) {
      setPwMessage({ type: 'error', text: 'New password and confirmation do not match.' });
      return;
    }
    try {
      const users = JSON.parse(localStorage.getItem('skandaplus_users') || '[]');
      const idx = users?.findIndex(u => u?.email?.toLowerCase() === currentUser?.email?.toLowerCase() && u?.password === pwForm?.current);
      if (idx === -1) {
        setPwMessage({ type: 'error', text: 'Current password is incorrect.' });
        return;
      }
      users[idx] = { ...users[idx], password: pwForm?.next };
      localStorage.setItem('skandaplus_users', JSON.stringify(users));
      setPwForm({ current: '', next: '', confirm: '' });
      setPwMessage({ type: 'success', text: 'Password updated successfully.' });
    } catch (err) {
      setPwMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    }
  };

  const inputClass = 'w-full px-4 py-2.5 rounded-lg border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accentBlue/30 focus:border-accentBlue';

  if (!checkedAuth) {
    return <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center py-24">
          <p className="font-body text-bodyText text-sm">Loading your profile…</p>
        </main>
        <Footer />
      </div>;
  }

  if (!currentUser?.email) {
    return <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center py-24 px-4">
          <div className="w-full max-w-md bg-white rounded-xl2 shadow-card border border-gray-100 p-8 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-navy flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">SP</span>
            </div>
            <h1 className="font-heading font-semibold text-navy text-xl mb-2">Log in to view your profile</h1>
            <p className="font-body text-bodyText text-sm mb-6">You need to be logged in to access your Basic Information, Activity, and Course Certification details.</p>
            <div className="flex items-center justify-center gap-3">
              <Link href="/login" className="bg-navy text-white px-5 py-2.5 rounded font-body font-semibold text-sm hover:bg-accentBlue transition-colors duration-200">
                Log In
              </Link>
              <Link href="/register" className="text-navy px-5 py-2.5 rounded border border-navy/15 font-body font-semibold text-sm hover:border-accentBlue hover:text-accentBlue transition-colors duration-200">
                Register
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>;
  }

  const displayName = profile?.fullName || currentUser?.firstName || 'Your Profile';
  const completedCourses = (profile?.courses || [])?.filter(c => c?.status === 'Completed');

  return <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="font-heading font-bold text-navy text-3xl mb-1">My Profile</h1>
            <p className="font-body text-bodyText text-sm">Manage your information, contributions, and course certifications.</p>
          </div>

          {savedNotice && <div className="mb-6 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm font-body px-4 py-3">
              {savedNotice}
            </div>}

          {/* Basic Information Panel */}
          <section className="bg-white rounded-xl2 shadow-card border border-gray-100 p-6 lg:p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading font-semibold text-navy text-xl">Basic Information</h2>
              {!editMode ? <button type="button" onClick={() => {
                setDraft(profile);
                setEditMode(true);
              }} className="flex items-center gap-1.5 text-accentBlue font-body font-semibold text-sm px-4 py-2 rounded border border-accentBlue/30 hover:bg-accentBlue/5 transition-colors duration-200">
                  Edit Profile
                </button> : <div className="flex items-center gap-2">
                  <button type="button" onClick={handleCancelEdit} className="text-bodyText font-body font-semibold text-sm px-4 py-2 rounded border border-gray-200 hover:border-gray-300 transition-colors duration-200">
                    Cancel
                  </button>
                  <button type="button" onClick={handleSaveProfile} className="bg-navy text-white font-body font-semibold text-sm px-4 py-2 rounded hover:bg-accentBlue transition-colors duration-200">
                    Save Changes
                  </button>
                </div>}
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-28 h-28 rounded-full bg-gray-100 border border-gray-200 overflow-hidden flex items-center justify-center">
                  {(editMode ? draft?.photo : profile?.photo) ? <img src={editMode ? draft?.photo : profile?.photo} alt="Profile photo" className="w-full h-full object-cover" /> : <span className="font-heading font-bold text-navy text-3xl">{displayName?.charAt(0)?.toUpperCase()}</span>}
                </div>
                {editMode && <label className="cursor-pointer text-accentBlue font-body font-semibold text-xs px-3 py-1.5 rounded border border-accentBlue/30 hover:bg-accentBlue/5 transition-colors duration-200">
                    Change Photo
                    <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                  </label>}
              </div>

              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body font-medium text-darkText text-sm mb-1.5">Full Name</label>
                  {editMode ? <input name="fullName" value={draft?.fullName} onChange={handleDraftChange} className={inputClass} placeholder="Enter your full name" /> : <p className="font-body text-darkText text-sm py-2.5">{profile?.fullName || '—'}</p>}
                </div>
                <div>
                  <label className="block font-body font-medium text-darkText text-sm mb-1.5">Email</label>
                  <p className="font-body text-bodyText text-sm py-2.5">{currentUser?.email}</p>
                </div>
                <div>
                  <label className="block font-body font-medium text-darkText text-sm mb-1.5">Education (College/School)</label>
                  {editMode ? <input name="education" value={draft?.education} onChange={handleDraftChange} className={inputClass} placeholder="e.g. B.Tech, XYZ College" /> : <p className="font-body text-darkText text-sm py-2.5">{profile?.education || '—'}</p>}
                </div>
                <div>
                  <label className="block font-body font-medium text-darkText text-sm mb-1.5">Date of Birth <span className="text-bodyText font-normal">(optional)</span></label>
                  {editMode ? <input type="date" name="dob" value={draft?.dob} onChange={handleDraftChange} className={inputClass} /> : <p className="font-body text-darkText text-sm py-2.5">{profile?.dob || '—'}</p>}
                </div>
                <div>
                  <label className="block font-body font-medium text-darkText text-sm mb-1.5">Gender <span className="text-bodyText font-normal">(optional)</span></label>
                  {editMode ? <select name="gender" value={draft?.gender} onChange={handleDraftChange} className={inputClass}>
                      <option value="">Prefer not to say</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Non-binary">Non-binary</option>
                      <option value="Other">Other</option>
                    </select> : <p className="font-body text-darkText text-sm py-2.5">{profile?.gender || '—'}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-body font-medium text-darkText text-sm mb-1.5">Bio</label>
                  {editMode ? <textarea name="bio" value={draft?.bio} onChange={handleDraftChange} rows={3} className={inputClass} placeholder="A brief bio about yourself" /> : <p className="font-body text-darkText text-sm py-2.5">{profile?.bio || '—'}</p>}
                </div>
              </div>
            </div>
          </section>

          {/* Course Completion & Certification Panel */}
          <section className="bg-white rounded-xl2 shadow-card border border-gray-100 p-6 lg:p-8 mb-8">
            <h2 className="font-heading font-semibold text-navy text-xl mb-1">Course Completion &amp; Certification</h2>
            <p className="font-body text-bodyText text-sm mb-6">Track your enrolled courses, progress, and download certificates once completed.</p>

            <form onSubmit={handleAddCourse} className="flex flex-col sm:flex-row gap-3 mb-6">
              <select value={courseForm?.name} onChange={e => setCourseForm(prev => ({ ...prev, name: e?.target?.value }))} className={`${inputClass} sm:flex-1`}>
                {AVAILABLE_COURSES?.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <select value={courseForm?.status} onChange={e => setCourseForm(prev => ({ ...prev, status: e?.target?.value }))} className={`${inputClass} sm:w-44`}>
                {COURSE_STATUSES?.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              {courseForm?.status !== 'Completed' && <input type="number" min="0" max="100" value={courseForm?.progress} onChange={e => setCourseForm(prev => ({ ...prev, progress: e?.target?.value }))} className={`${inputClass} sm:w-32`} placeholder="Progress %" />}
              <button type="submit" className="bg-navy text-white font-body font-semibold text-sm px-5 py-2.5 rounded hover:bg-accentBlue transition-colors duration-200 whitespace-nowrap">
                Add Course
              </button>
            </form>

            {(profile?.courses || [])?.length === 0 ? <p className="font-body text-bodyText text-sm py-6 text-center">No courses added yet. Add a course above to start tracking your progress.</p> : <div className="space-y-4">
                {profile?.courses?.map(course => <div key={course?.id} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-body font-semibold text-darkText text-sm">{course?.name}</span>
                          <span className={`text-xs font-body font-semibold px-2.5 py-0.5 rounded-full ${course?.status === 'Completed' ? 'bg-green-100 text-green-700' : course?.status === 'In Progress' ? 'bg-blue-50 text-accentBlue' : 'bg-gray-100 text-bodyText'}`}>
                            {course?.status}
                          </span>
                        </div>
                        {course?.status !== 'Completed' ? <div className="mt-2 w-full sm:w-64 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-accentBlue rounded-full" style={{
                        width: `${Math.min(100, Math.max(0, Number(course?.progress) || 0))}%`
                      }} />
                          </div> : <p className="font-body text-bodyText text-xs mt-1">Completed on {course?.completionDate} · Certificate ID: {course?.certificateId}</p>}
                      </div>
                      <div className="flex items-center gap-2">
                        {course?.status !== 'Completed' && <button type="button" onClick={() => handleUpdateCourseStatus(course?.id, 'Completed')} className="text-xs font-body font-semibold text-accentBlue border border-accentBlue/30 px-3 py-1.5 rounded hover:bg-accentBlue/5 transition-colors duration-200 whitespace-nowrap">
                            Mark Completed
                          </button>}
                        {course?.status === 'Completed' && <button type="button" onClick={() => setCertificateView(course)} className="text-xs font-body font-semibold text-white bg-gradient-to-r from-accentBlue to-violet px-3 py-1.5 rounded hover:brightness-110 transition-all duration-200 whitespace-nowrap">
                            View Certificate
                          </button>}
                      </div>
                    </div>
                  </div>)}
              </div>}

            {completedCourses?.length > 0 && <p className="font-body text-bodyText text-xs mt-5">{completedCourses?.length} of {profile?.courses?.length} course{profile?.courses?.length === 1 ? '' : 's'} completed.</p>}
          </section>

          {/* Activity & Contributions Panel */}
          <section className="bg-white rounded-xl2 shadow-card border border-gray-100 p-6 lg:p-8">
            <h2 className="font-heading font-semibold text-navy text-xl mb-6">Activity &amp; Contributions</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Add Blog */}
              <div>
                <h3 className="font-heading font-semibold text-darkText text-base mb-3">Add Blog</h3>
                <form onSubmit={handleAddBlog} className="space-y-3">
                  <input value={blogForm?.title} onChange={e => setBlogForm(prev => ({ ...prev, title: e?.target?.value }))} className={inputClass} placeholder="Blog title" />
                  <textarea value={blogForm?.content} onChange={e => setBlogForm(prev => ({ ...prev, content: e?.target?.value }))} rows={4} className={inputClass} placeholder="Write your blog content here..." />
                  <button type="submit" className="bg-navy text-white font-body font-semibold text-sm px-5 py-2.5 rounded hover:bg-accentBlue transition-colors duration-200">
                    Publish Blog
                  </button>
                </form>
                <div className="mt-5 space-y-3 max-h-72 overflow-y-auto pr-1">
                  {profile?.blogs?.map(blog => <div key={blog?.id} className="border border-gray-100 rounded-lg p-3">
                      <p className="font-body font-semibold text-darkText text-sm">{blog?.title}</p>
                      <p className="font-body text-bodyText text-xs mt-1 line-clamp-3">{blog?.content}</p>
                      <p className="font-body text-bodyText text-[11px] mt-2">{blog?.date}</p>
                    </div>)}
                </div>
              </div>

              {/* Add Review */}
              <div>
                <h3 className="font-heading font-semibold text-darkText text-base mb-3">Add Review</h3>
                <form onSubmit={handleAddReview} className="space-y-3">
                  <select value={reviewForm?.rating} onChange={e => setReviewForm(prev => ({ ...prev, rating: e?.target?.value }))} className={inputClass}>
                    {[5, 4, 3, 2, 1]?.map(r => <option key={r} value={r}>{r} Star{r === 1 ? '' : 's'}</option>)}
                  </select>
                  <textarea value={reviewForm?.text} onChange={e => setReviewForm(prev => ({ ...prev, text: e?.target?.value }))} rows={4} className={inputClass} placeholder="Share your feedback or review..." />
                  <button type="submit" className="bg-navy text-white font-body font-semibold text-sm px-5 py-2.5 rounded hover:bg-accentBlue transition-colors duration-200">
                    Submit Review
                  </button>
                </form>
                <div className="mt-5 space-y-3 max-h-72 overflow-y-auto pr-1">
                  {profile?.reviews?.map(review => <div key={review?.id} className="border border-gray-100 rounded-lg p-3">
                      <p className="font-body font-semibold text-gold-dark text-sm">{'★'?.repeat(review?.rating)}{'☆'?.repeat(5 - review?.rating)}</p>
                      <p className="font-body text-bodyText text-xs mt-1">{review?.text}</p>
                      <p className="font-body text-bodyText text-[11px] mt-2">{review?.date}</p>
                    </div>)}
                </div>
              </div>
            </div>
          </section>

          {/* Saved Jobs Panel */}
          <section className="bg-white rounded-xl2 shadow-card border border-gray-100 p-6 lg:p-8 mt-8">
            <h2 className="font-heading font-semibold text-navy text-xl mb-1">Saved Jobs</h2>
            <p className="font-body text-bodyText text-sm mb-6">Roles you've bookmarked from our Careers page.</p>

            {(savedJobs || [])?.length === 0 ? <p className="font-body text-bodyText text-sm py-6 text-center">
                No saved jobs yet. Browse <Link href="/careers" className="text-accentBlue font-semibold hover:text-navy transition-colors">open positions</Link> and tap Save on any role you're interested in.
              </p> : <div className="space-y-3">
                {savedJobs?.map(job => <div key={job?.title} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-gray-100 rounded-lg p-4">
                    <div>
                      <p className="font-body font-semibold text-darkText text-sm">{job?.title}</p>
                      <p className="font-body text-bodyText text-xs mt-1">{job?.dept} · {job?.location} · {job?.type}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link href="/careers" className="text-xs font-body font-semibold text-accentBlue hover:text-navy transition-colors whitespace-nowrap">
                        View on Careers
                      </Link>
                      <button type="button" onClick={() => handleUnsaveJob(job?.title)} className="text-xs font-body font-semibold text-bodyText border border-gray-200 px-3 py-1.5 rounded hover:border-red-300 hover:text-red-500 transition-colors duration-200 whitespace-nowrap">
                        Remove
                      </button>
                    </div>
                  </div>)}
              </div>}
          </section>

          {/* Account Settings Panel */}
          <section className="bg-white rounded-xl2 shadow-card border border-gray-100 p-6 lg:p-8 mt-8">
            <h2 className="font-heading font-semibold text-navy text-xl mb-1">Settings</h2>
            <p className="font-body text-bodyText text-sm mb-6">Manage your password and privacy preferences. Use the Edit Profile button above to update your basic information.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Change Password */}
              <div>
                <h3 className="font-heading font-semibold text-darkText text-base mb-3">Change Password</h3>
                {pwMessage?.text && <div className={`mb-3 rounded-lg text-xs font-body px-3 py-2 border ${pwMessage?.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-600'}`}>
                    {pwMessage?.text}
                  </div>}
                <form onSubmit={handleChangePassword} className="space-y-3">
                  <input type="password" name="current" value={pwForm?.current} onChange={handlePasswordChange} className={inputClass} placeholder="Current password" autoComplete="current-password" />
                  <input type="password" name="next" value={pwForm?.next} onChange={handlePasswordChange} className={inputClass} placeholder="New password (min. 6 characters)" autoComplete="new-password" />
                  <input type="password" name="confirm" value={pwForm?.confirm} onChange={handlePasswordChange} className={inputClass} placeholder="Confirm new password" autoComplete="new-password" />
                  <button type="submit" className="bg-navy text-white font-body font-semibold text-sm px-5 py-2.5 rounded hover:bg-accentBlue transition-colors duration-200">
                    Update Password
                  </button>
                </form>
              </div>

              {/* Privacy Settings */}
              <div>
                <h3 className="font-heading font-semibold text-darkText text-base mb-3">Privacy Settings</h3>
                <div className="border border-gray-100 rounded-lg p-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-body font-semibold text-darkText text-sm">Show my activity publicly</p>
                    <p className="font-body text-bodyText text-xs mt-1">When off, your blogs, reviews, and course progress are kept private and only visible to you.</p>
                  </div>
                  <button type="button" onClick={handleTogglePrivacy} role="switch" aria-checked={!!profile?.privacyPublic} className={`shrink-0 w-11 h-6 rounded-full relative transition-colors duration-200 ${profile?.privacyPublic ? 'bg-accentBlue' : 'bg-gray-300'}`}>
                    <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${profile?.privacyPublic ? 'translate-x-5' : 'translate-x-0.5'}`} />
                  </button>
                </div>
                <p className="font-body text-bodyText text-xs mt-4">
                  We only store the profile details you choose to add. Date of birth and gender are optional and can be left blank at any time.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Certificate Modal */}
      {certificateView && <div className="fixed inset-0 bg-navy/60 flex items-center justify-center z-50 px-4" onClick={() => setCertificateView(null)}>
          <div className="bg-white rounded-xl2 shadow-cardHover max-w-lg w-full p-8 border-4 border-accentBlue/20" onClick={e => e?.stopPropagation()}>
            <div className="text-center">
              <p className="font-body text-bodyText text-xs uppercase tracking-widest mb-2">Certificate of Completion</p>
              <h3 className="font-heading font-bold text-navy text-2xl mb-4">SkandaPlus</h3>
              <p className="font-body text-bodyText text-sm mb-1">This certifies that</p>
              <p className="font-heading font-semibold text-darkText text-xl mb-3">{displayName}</p>
              <p className="font-body text-bodyText text-sm mb-1">has successfully completed the course</p>
              <p className="font-heading font-semibold text-accentBlue text-lg mb-4">{certificateView?.name}</p>
              <p className="font-body text-bodyText text-xs">Completed on {certificateView?.completionDate}</p>
              <p className="font-body text-bodyText text-xs mb-6">Certificate ID: {certificateView?.certificateId}</p>
              <button type="button" onClick={() => setCertificateView(null)} className="bg-navy text-white font-body font-semibold text-sm px-6 py-2.5 rounded hover:bg-accentBlue transition-colors duration-200">
                Close
              </button>
            </div>
          </div>
        </div>}

      <Footer />
    </div>;
}
