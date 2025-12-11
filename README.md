# Multi-Step Form with React Hook Form

A modern, responsive multi-step form application built with React, TypeScript, and React Hook Form. This project demonstrates form validation, dynamic field arrays, local storage caching, and a beautiful step-by-step user interface.

## Features

- **Multi-Step Form**: Four-step form process (Personal Info → Education → Experience → Review)
- **Form Validation**: Comprehensive validation using React Hook Form with custom rules
- **Dynamic Fields**: Add/remove multiple education and experience entries
- **Local Storage**: Automatic form data caching to prevent data loss
- **Progress Indicator**: Visual step indicator with lines showing current progress
- **Review Page**: Preview all entered information before final submission
- **Responsive Design**: Mobile-friendly interface with CSS Modules
- **TypeScript**: Full type safety throughout the application
- **File Upload**: Profile photo upload functionality

## Technologies Used

- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **React Hook Form 7.52.2** - Form management and validation
- **Vite 5.4.0** - Build tool and dev server
- **CSS Modules** - Scoped styling

## Project Structure

```
src/
├── components/
│   ├── PersonalInfo.tsx      # Step 1: Personal information form
│   ├── Education.tsx          # Step 2: Education entries (dynamic)
│   ├── Experience.tsx         # Step 3: Work experience entries (dynamic)
│   ├── Review.tsx             # Step 4: Review all entered data
│   └── ProgressBar.tsx        # Step indicator component
├── styles/
│   ├── App.module.css         # Main app styles
│   ├── PersonalInfo.module.css
│   ├── Education.module.css
│   ├── Experience.module.css
│   ├── Review.module.css
│   └── ProgressBar.module.css
├── types.ts                   # TypeScript interfaces
├── App.tsx                    # Main application component
└── main.tsx                   # Application entry point
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Form-Provider_practice
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## Usage

### Step 1: Personal Information

- Fill in personal details: name, last name, email, phone, date of birth
- Enter address information: address, city, country, postal code
- Select gender
- Upload a profile photo (optional)

### Step 2: Education

- Click "Add Education Entry" to add education records
- Fill in: degree level, institution name, field of study, dates, GPA, description
- Mark "I currently study here" if applicable
- Remove entries using the "Remove" button

### Step 3: Experience

- Click "Add Experience Entry" to add work experience
- Fill in: job title, company name, employment type, dates, location, description, skills
- Mark "I currently work here" to disable end date
- Remove entries using the "Remove" button

### Step 4: Review

- Review all entered information
- Verify profile photo
- Click "Submit" to complete the form

## Form Features

### Validation

- Required field validation
- Email format validation
- Phone number pattern validation
- Date validation
- Minimum length requirements

### Data Persistence

- Form data is automatically saved to localStorage as you type
- Data persists across page refreshes
- Cache is cleared after successful submission

### Dynamic Fields

- Add unlimited education entries
- Add unlimited experience entries
- Remove individual entries
- Each entry has independent validation

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## TypeScript Interfaces

The application uses TypeScript interfaces defined in `src/types.ts`:

- `EducationEntry` - Structure for education entries
- `ExperienceEntry` - Structure for work experience entries
- `Inputs` - Main form data structure

## Styling

The project uses CSS Modules for scoped styling:

- Each component has its own `.module.css` file
- Styles are locally scoped to prevent conflicts
- Responsive design with media queries
- Modern UI with smooth transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author

**Tamara Tava**

- LinkedIn: [@tamara-tava](https://www.linkedin.com/in/tamara-tava/)

## License

This project is open source and available under the MIT License.
