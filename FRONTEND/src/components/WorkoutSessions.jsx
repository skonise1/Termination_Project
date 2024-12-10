import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Push your limits with our high-intensity indoor cycling sessions. Pedal to peak fitness with real-time tracking and unmatched endurance!
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Experience the ultimate transformation with our curated bootcamps. From cardio to strength training, we’ve got something for everyone.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Cardio Burn Bootcamp.</h4>
            <p>
              Ignite your metabolism with our high-energy cardio sessions designed to improve stamina and heart health!
            </p>
          </div>
          <div>
            <h4>Strength Power Bootcamp.</h4>
            <p>
            Build muscle and boost strength with dynamic workouts focused on weight training and functional movements!
            </p>
          </div>
          <div>
            <h4>Core Blast Bootcamp.</h4>
            <p>
            Strengthen your core and improve posture with our targeted core exercises for all fitness levels1
            </p>
          </div>
          <div>
            <h4>Flex and Stretch.</h4>
            <p>
            Improve flexibility and recover faster with our yoga-inspired flexibility training sessions!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;