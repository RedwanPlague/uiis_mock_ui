
const routes = [
  {
    path: '/teacher',
    component: () => import('layouts/TeacherLayout'),
    children: [
      { path: '', name: 'Teacher', component: () => import('pages/Index') },
      { path: 'classes', name: 'TeacherClassesPage', component: () => import('pages/teacher/ClassesPage') },
      { path: 'invigilation', name: 'TeacherInvigilationPage', component: () => import('pages/teacher/InvigilationPage') },
      { path: 'question-setting', name: 'TeacherQuestionSettingPage', component: () => import('pages/teacher/QuestionSettingPage') },
      { path: 'examining-scripts', name: 'TeacherExaminingScriptsPage', component: () => import('pages/teacher/ExaminingScriptsPage') },
      { path: 'scrutinizing-scripts', name: 'TeacherScrutinizingScriptsPage', component: () => import('pages/teacher/ScrutinizingScriptsPage') },
      { path: 'supervisor', name: 'TeacherSupervisorPage', component: () => import('pages/teacher/SupervisorPage') },
      { path: 'advisor-corner', name: 'TeacherAdvisorPage', component: () => import('pages/teacher/AdvisorPage') },
      { path: 'head-corner', name: 'TeacherHeadOfDeptPage', component: () => import('pages/teacher/HeadOfDeptPage') },
      { path: 'provost-corner', name: 'TeacherProvostPage', component: () => import('pages/teacher/ProvostPage') },
      { path: 'feedback', name: 'TeacherFeedbackPage', component: () => import('pages/teacher/FeedbackPage') },
      { path: 'student', name: 'StudentPage', component: () => import('pages/common/StudentPage') },
      { path: 'course', name: 'CoursePage', component: () => import('pages/common/CoursePage') },
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout'),
    children: [
      { path: '', name: 'Admin', component: () => import('pages/Index') },
      { path: 'courses', name: 'AdminCoursesPage', component: () => import('pages/admin/CoursesPage') },
      { path: 'notices', name: 'AdminNoticePage', component: () => import('pages/admin/NoticePage') },
      { path: 'scholarships', name: 'AdminScholarshipPage', component: () => import('pages/admin/ScholarshipPage') },
      { path: 'dues', name: 'AdminDuesPage', component: () => import('pages/admin/DuePage') },
      { path: 'accounts', name: 'AdminAccountPage', component: () => import('pages/admin/AccountPage') },
      { path: 'privileges', name: 'AdminPrivilegePage', component: () => import('pages/admin/PrivilegePage') },
      { path: 'student', name: 'AdminStudentPage', component: () => import('pages/common/StudentPage') },
      { path: 'course', name: 'AdminCoursePage', component: () => import('pages/common/CoursePage') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404')
  }
]

export default routes
