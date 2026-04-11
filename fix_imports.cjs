const fs = require('fs');
const files = [
  'src/pages/CertificatePage.tsx',
  'src/pages/InstructorDashboard.tsx',
  'src/pages/InstructorMyCoursesPage.tsx',
  'src/pages/InstructorProfileSetupPage.tsx',
  'src/pages/InstructorSetPasswordPage.tsx',
  'src/pages/InstructorVerifyLoginPage.tsx',
  'src/pages/NotificationsPage.tsx',
  'src/pages/ProfileSetupPage.tsx'
];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  if (!c.includes("import BottomNav")) {
    c = "import BottomNav from '../components/layout/BottomNav';\n" + c;
    fs.writeFileSync(f, c);
  }
});
