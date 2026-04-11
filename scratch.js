const fs = require('fs');
const path = require('path');

const files = [
  'ProfileSetupPage.tsx',
  'NotificationsPage.tsx',
  'MyLearningPage.tsx',
  'MessagesPage.tsx',
  'LearnerDashboard.tsx',
  'LearnerCoursesPage.tsx',
  'LearnerCoursePreviewPage.tsx',
  'LearnerAssignmentPage.tsx',
  'LearnerCoursePlayerPage.tsx',
  'InstructorVerifyLoginPage.tsx',
  'InstructorSubmissionsPage.tsx',
  'InstructorSetPasswordPage.tsx',
  'InstructorProfileSetupPage.tsx',
  'InstructorMyCoursesPage.tsx',
  'InstructorCurriculumBuilder.tsx',
  'InstructorDashboard.tsx',
  'InstructorCoursesPage.tsx',
  'InstructorCourseBuilder.tsx',
  'InstructorContentUploadPage.tsx',
  'InstructorAssignmentBuilderPage.tsx',
  'AdminAddInstructorPage.tsx',
  'AdminInstructorProfilePage.tsx',
  'AdminUserDetailPage.tsx',
  'AssignmentsPage.tsx',
  'DiscussionsPage.tsx',
  'CertificatesPage.tsx',
  'CertificatePage.tsx'
];

const basePath = '/home/leac1m/projects/Talentflow_lms/src/pages';

files.forEach(f => {
  const p = path.join(basePath, f);
  if (!fs.existsSync(p)) {
    console.log(`[MISSING] ${f}`);
    return;
  }
  let c = fs.readFileSync(p, 'utf8');
  let hasBNImport = c.includes('layout/BottomNav');
  let hasBNUse = c.includes('<BottomNav />');
  let hasMain = c.includes('<main');
  let hasPb = c.match(/<main[^>]*pb-\d+/);
  
  if (!hasBNImport || !hasBNUse || !hasPb) {
    console.log(`${f} -> BNImport:${hasBNImport} BNUse:${hasBNUse} hasMain:${hasMain} hasPb:${!!hasPb}`);
  }
});
