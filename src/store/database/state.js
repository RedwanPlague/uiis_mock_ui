export default {
  sidebarLinks: [
    {
      title: 'Classes',
      icon: 'mdi-google-classroom',
      link: { name: 'TeacherClassesPage' }
    },
    {
      title: 'Invigilation',
      icon: 'bookmark',
      link: { name: 'TeacherInvigilationPage' }
    },
    {
      title: 'Question Setting',
      icon: 'cached',
      link: { name: 'TeacherQuestionSettingPage' }
    },
    {
      title: 'Examining Scripts',
      icon: 'code',
      link: { name: 'TeacherExaminingScriptsPage' }
    },
    {
      title: 'Scrutinizing Scripts',
      icon: 'mdi-code-tags-check',
      link: { name: 'TeacherScrutinizingScriptsPage' }
    },
    {
      title: 'Supervisor\'s Corner',
      icon: 'school',
      link: { name: 'TeacherSupervisorPage' }
    },
    {
      title: 'Advisor\'s Corner',
      icon: 'school',
      link: { name: 'TeacherAdvisorPage' }
    },
    {
      title: 'Head of Dept Corner',
      icon: 'school',
      link: { name: 'TeacherHeadOfDeptPage' }
    },
    {
      title: 'Provost Corner',
      icon: 'school',
      link: { name: 'TeacherProvostPage' }
    },
    {
      title: 'Feedback',
      icon: 'school',
      link: { name: 'TeacherFeedbackPage' }
    },
  ],
  user: 'Super Teacher',
  adminLinks: [
    { title: 'Accounts', icon: 'mdi-account-multiple-plus', link: { name: 'AdminAccountPage' } },
    { title: 'Courses', icon: 'mdi-book-open-variant', link: { name: 'AdminCoursesPage' } },
    { title: 'Exams', icon: 'mdi-pencil-box-multiple', link: { name: 'AdminExamPage' } },
    { title: 'Scholarships', icon: 'school', link: { name: 'AdminScholarshipPage' } },
    { title: 'Dues', icon: 'mdi-cash-multiple', link: { name: 'AdminDuesPage' } },
    { title: 'Notices', icon: 'mdi-bulletin-board', link: { name: 'AdminNoticePage' } },
    { title: 'Bus Routes', icon: 'mdi-bus-stop', link: { name: 'AdminBusRoutePage' } },
    { title: 'Routines', icon: 'mdi-calendar-clock', link: { name: 'AdminClassRoutinePage' } },
    { title: 'Seat Plan', icon: 'mdi-account-group-outline', link: { name: 'AdminSeatPlanPage' } },
    { title: 'Miscellaneous', icon: 'miscellaneous_services', link: { name: 'AdminMiscellaneousPage' } },
  ]
}
