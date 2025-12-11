import { useFormContext } from "react-hook-form";
import { Inputs } from "../types";
import styles from "../styles/Review.module.css";

export default function Review() {
  const { watch } = useFormContext<Inputs>();
  const formData = watch();

  // Profile Photo URL-ის მიღება
  const getPhotoUrl = () => {
    if (formData.profilePhoto && formData.profilePhoto.length > 0) {
      return URL.createObjectURL(formData.profilePhoto[0]);
    }
    return null;
  };

  const photoUrl = getPhotoUrl();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Review Your Information</h2>
      <p style={{ textAlign: "center", color: "#64748b", marginBottom: "2rem" }}>
        Please review all your information before submitting.
      </p>

      {/* Personal Information Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Personal Information</h3>

        {photoUrl && (
          <div className={styles.photoContainer}>
            <img src={photoUrl} alt="Profile" className={styles.photo} />
          </div>
        )}

        <div className={styles.infoGrid}>
          <div className={styles.infoLabel}>Name:</div>
          <div className={styles.infoValue}>
            {formData.name || <span className={styles.emptyValue}>Not provided</span>}
          </div>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoLabel}>Last Name:</div>
          <div className={styles.infoValue}>
            {formData.lastName || <span className={styles.emptyValue}>Not provided</span>}
          </div>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoLabel}>Email:</div>
          <div className={styles.infoValue}>
            {formData.email || <span className={styles.emptyValue}>Not provided</span>}
          </div>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoLabel}>Phone:</div>
          <div className={styles.infoValue}>
            {formData.phone || <span className={styles.emptyValue}>Not provided</span>}
          </div>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoLabel}>Date of Birth:</div>
          <div className={styles.infoValue}>
            {formData.dateOfBirth
              ? new Date(formData.dateOfBirth).toLocaleDateString()
              : <span className={styles.emptyValue}>Not provided</span>}
          </div>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoLabel}>Address:</div>
          <div className={styles.infoValue}>
            {formData.address || <span className={styles.emptyValue}>Not provided</span>}
          </div>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoLabel}>City:</div>
          <div className={styles.infoValue}>
            {formData.city || <span className={styles.emptyValue}>Not provided</span>}
          </div>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoLabel}>Country:</div>
          <div className={styles.infoValue}>
            {formData.country || <span className={styles.emptyValue}>Not provided</span>}
          </div>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoLabel}>Postal Code:</div>
          <div className={styles.infoValue}>
            {formData.postalCode || <span className={styles.emptyValue}>Not provided</span>}
          </div>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoLabel}>Gender:</div>
          <div className={styles.infoValue}>
            {formData.gender
              ? formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1)
              : <span className={styles.emptyValue}>Not provided</span>}
          </div>
        </div>
      </div>

      {/* Education Section */}
      {formData.education && formData.education.length > 0 && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Education</h3>
          {formData.education.map((edu, index) => (
            <div key={index} className={styles.entryCard}>
              <h4 className={styles.entryTitle}>Education #{index + 1}</h4>

              <div className={styles.entryGrid}>
                <div className={styles.entryLabel}>Degree Level:</div>
                <div className={styles.entryValue}>
                  {edu.degreeLevel
                    ? edu.degreeLevel
                        .split("-")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ")
                    : <span className={styles.emptyValue}>Not provided</span>}
                </div>
              </div>

              <div className={styles.entryGrid}>
                <div className={styles.entryLabel}>Institution:</div>
                <div className={styles.entryValue}>
                  {edu.institutionName || <span className={styles.emptyValue}>Not provided</span>}
                </div>
              </div>

              <div className={styles.entryGrid}>
                <div className={styles.entryLabel}>Field of Study:</div>
                <div className={styles.entryValue}>
                  {edu.fieldOfStudy || <span className={styles.emptyValue}>Not provided</span>}
                </div>
              </div>

              <div className={styles.entryGrid}>
                <div className={styles.entryLabel}>Start Date:</div>
                <div className={styles.entryValue}>
                  {edu.startDate
                    ? new Date(edu.startDate).toLocaleDateString()
                    : <span className={styles.emptyValue}>Not provided</span>}
                </div>
              </div>

              <div className={styles.entryGrid}>
                <div className={styles.entryLabel}>End Date:</div>
                <div className={styles.entryValue}>
                  {edu.endDate
                    ? new Date(edu.endDate).toLocaleDateString()
                    : <span className={styles.emptyValue}>Not provided</span>}
                </div>
              </div>

              {edu.gpa && (
                <div className={styles.entryGrid}>
                  <div className={styles.entryLabel}>GPA/Grade:</div>
                  <div className={styles.entryValue}>{edu.gpa}</div>
                </div>
              )}

              {edu.description && (
                <div className={styles.description}>
                  <span className={styles.descriptionLabel}>Description:</span>
                  <div className={styles.descriptionText}>{edu.description}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Experience Section */}
      {formData.experience && formData.experience.length > 0 && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Work Experience</h3>
          {formData.experience.map((exp, index) => (
            <div key={index} className={styles.entryCard}>
              <h4 className={styles.entryTitle}>Experience #{index + 1}</h4>

              <div className={styles.entryGrid}>
                <div className={styles.entryLabel}>Job Title:</div>
                <div className={styles.entryValue}>
                  {exp.jobTitle || <span className={styles.emptyValue}>Not provided</span>}
                </div>
              </div>

              <div className={styles.entryGrid}>
                <div className={styles.entryLabel}>Company:</div>
                <div className={styles.entryValue}>
                  {exp.companyName || <span className={styles.emptyValue}>Not provided</span>}
                </div>
              </div>

              <div className={styles.entryGrid}>
                <div className={styles.entryLabel}>Employment Type:</div>
                <div className={styles.entryValue}>
                  {exp.employmentType
                    ? exp.employmentType
                        .split("-")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ")
                    : <span className={styles.emptyValue}>Not provided</span>}
                </div>
              </div>

              <div className={styles.entryGrid}>
                <div className={styles.entryLabel}>Start Date:</div>
                <div className={styles.entryValue}>
                  {exp.startDate
                    ? new Date(exp.startDate).toLocaleDateString()
                    : <span className={styles.emptyValue}>Not provided</span>}
                </div>
              </div>

              <div className={styles.entryGrid}>
                <div className={styles.entryLabel}>End Date:</div>
                <div className={styles.entryValue}>
                  {exp.isCurrent
                    ? "Present"
                    : exp.endDate
                    ? new Date(exp.endDate).toLocaleDateString()
                    : <span className={styles.emptyValue}>Not provided</span>}
                </div>
              </div>

              <div className={styles.entryGrid}>
                <div className={styles.entryLabel}>Location:</div>
                <div className={styles.entryValue}>
                  {exp.location || <span className={styles.emptyValue}>Not provided</span>}
                </div>
              </div>

              <div className={styles.entryGrid}>
                <div className={styles.entryLabel}>Skills Used:</div>
                <div className={styles.entryValue}>
                  {exp.skillsUsed || <span className={styles.emptyValue}>Not provided</span>}
                </div>
              </div>

              {exp.description && (
                <div className={styles.description}>
                  <span className={styles.descriptionLabel}>Description:</span>
                  <div className={styles.descriptionText}>{exp.description}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

