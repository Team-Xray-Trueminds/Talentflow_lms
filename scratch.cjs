const fs = require('fs');
const path = require('path');

const files = [
  'ProfileSetupPage.tsx', 'NotificationsPage.tsx', 'MyLearningPage.tsx',
  'MessagesPage.tsx', 'LearnerDashboard.tsx', 'LearnerCoursesPage.tsx',
  'LearnerCoursePreviewPage.tsx', 'LearnerAssignmentPage.tsx',
  'LearnerCoursePlayerPage.tsx', 'InstructorVerifyLoginPage.tsx',
  'InstructorSubmissionsPage.tsx', 'InstructorSetPasswordPage.tsx',
  'InstructorProfileSetupPage.tsx', 'InstructorMyCoursesPage.tsx',
  'InstructorCurriculumBuilder.tsx', 'InstructorDashboard.tsx',
  'InstructorCoursesPage.tsx', 'InstructorCourseBuilder.tsx',
  'InstructorContentUploadPage.tsx', 'InstructorAssignmentBuilderPage.tsx',
  'AdminAddInstructorPage.tsx', 'AdminInstructorProfilePage.tsx',
  'AdminUserDetailPage.tsx', 'AssignmentsPage.tsx', 'DiscussionsPage.tsx',
  'CertificatesPage.tsx', 'CertificatePage.tsx'
];

const basePath = '/home/leac1m/projects/Talentflow_lms/src/pages';

files.forEach(f => {
  const p = path.join(basePath, f);
  if (!fs.existsSync(p)) return;
  
  let content = fs.readFileSync(p, 'utf8');
  let changed = false;

  // Add BottomNav import if missing
  if (!content.includes('BottomNav')) {
    content = content.replace(/(import .*;\n)(?!.*import)/, "$1import BottomNav from '../components/layout/BottomNav';\n");
    changed = true;
  }

  // Add <BottomNav /> if missing. Insert right before the last </div>
  if (!content.includes('<BottomNav />')) {
    const lastDivIndex = content.lastIndexOf('</div>');
    if (lastDivIndex !== -1) {
      content = content.substring(0, lastDivIndex) + '    <BottomNav />\n        ' + content.substring(lastDivIndex);
      changed = true;
    }
  }

  // Ensure <main> has pb-24 lg:pb-8
  if (content.includes('<main')) {
    if (!content.includes('pb-24 lg:pb-8') && !content.includes('pb-24 sm:pb-8')) {
        // Find main tag and replace its class
        content = content.replace(/(<main[^>]*className=["'][^"']*)(\s*pb-\d+(?:\s+(?:md|lg|sm):pb-\d+)?)?([^"']*["'])/g, (match, prefix, pb, suffix) => {
            // Remove existing pb-* if any
            let newPrefix = prefix.replace(/\s*pb-\w+(?:\s+(?:md|lg|sm):pb-\w+)?/g, '');
            // Append target
            return newPrefix + ' pb-24 lg:pb-8' + suffix;
        });
        changed = true;
    }
  }

  // Adjust rigid paddings:
  // p-10 -> px-4 sm:px-6 lg:p-10
  // px-10 -> px-4 sm:px-6 lg:px-10
  // p-8 -> px-4 sm:px-6 lg:p-8
  if (content.includes(' p-10') || content.includes('"p-10') || content.includes(' px-10') || content.includes('"px-10') || content.includes(' p-8') || content.includes('"p-8')) {
      content = content.replace(/(["'\s])p-10([\s"'])/g, '$1px-4 py-6 sm:px-6 lg:p-10$2');
      content = content.replace(/(["'\s])px-10([\s"'])/g, '$1px-4 sm:px-6 lg:px-10$2');
      content = content.replace(/(["'\s])p-8([\s"'])/g, '$1px-4 py-6 sm:px-6 lg:p-8$2');
      changed = true;
  }

  if (changed) {
    fs.writeFileSync(p, content, 'utf8');
    console.log(`Updated ${f}`);
  }
});
