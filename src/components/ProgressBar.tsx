import styles from "../styles/ProgressBar.module.css";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepNames: string[];
}

export default function ProgressBar({
  currentStep,
  totalSteps,
  stepNames,
}: ProgressBarProps) {
  return (
    <div className={styles.container}>
      <div className={styles.progressBar}>
        {stepNames.map((name, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;
          const isUpcoming = stepNumber > currentStep;

          return (
            <div key={index} className={styles.stepContainer}>
              <div className={styles.stepWrapper}>
                {/* Step Circle */}
                <div className={styles.circleWrapper}>
                  <div
                    className={`${styles.stepCircle} ${
                      isCompleted
                        ? styles.completed
                        : isActive
                        ? styles.active
                        : styles.upcoming
                    }`}
                  >
                    {isCompleted ? (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3333 4L6 11.3333L2.66667 8"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <span className={styles.stepNumber}>{stepNumber}</span>
                    )}
                  </div>

                  {/* Step Label */}
                  <div
                    className={`${styles.stepLabel} ${
                      isActive ? styles.activeLabel : ""
                    }`}
                  >
                    {name}
                  </div>
                </div>

                {/* Connecting Line */}
                {index < totalSteps - 1 && (
                  <div
                    className={`${styles.connector} ${
                      isCompleted ? styles.completedLine : styles.upcomingLine
                    }`}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

