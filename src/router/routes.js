
const routes = [
  {
    path: '/teacher',
    component: () => import('layouts/TeacherLayout.vue'),
    children: [
      { path: '', name: 'Teacher', component: () => import('pages/Index.vue') },
      { path: 'classes', name: 'TeacherClassesPage', component: () => import('pages/teacher/ClassesPage.vue') },
      { path: 'invigilation', name: 'TeacherInvigilationPage', component: () => import('pages/teacher/InvigilationPage.vue') },
      { path: 'question-setting', name: 'TeacherQuestionSettingPage', component: () => import('pages/teacher/QuestionSettingPage.vue') },
      { path: 'examining-scripts', name: 'TeacherExaminingScriptsPage', component: () => import('pages/teacher/ExaminingScriptsPage.vue') },
      { path: 'scrutinizing-scripts', name: 'TeacherScrutinizingScriptsPage', component: () => import('pages/teacher/ScrutinizingScriptsPage.vue') },
      { path: 'advisor-corner', name: 'TeacherAdvisorPage', component: () => import('pages/teacher/AdvisorPage.vue') },
      { path: 'head-corner', name: 'TeacherHeadOfDeptPage', component: () => import('pages/teacher/HeadOfDeptPage.vue') },
      { path: 'provost-corner', name: 'TeacherProvostPage', component: () => import('pages/teacher/ProvostPage.vue') },
      { path: 'feedback', name: 'TeacherFeedbackPage', component: () => import('pages/teacher/FeedbackPage.vue') },
      { path: 'student', name: 'StudentPage', component: () => import('pages/common/StudentPage.vue') },
      { path: 'course', name: 'CoursePage', component: () => import('pages/common/CoursePage.vue') },
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', name: 'Admin', component: () => import('pages/Index.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
