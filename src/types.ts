// Education Entry Interface
export interface EducationEntry {
  degreeLevel: string;
  institutionName: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  gpa?: string;
  description: string;
}

// Experience Entry Interface
export interface ExperienceEntry {
  jobTitle: string;
  companyName: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  location: string;
  description: string;
  skillsUsed: string;
}

// Main Form Inputs Interface
export interface Inputs {
  // Personal Information
  name: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  gender: string;
  profilePhoto: FileList | null;

  // Education (Multiple Entries)
  education: EducationEntry[];

  // Experience (Multiple Entries)
  experience: ExperienceEntry[];
}

