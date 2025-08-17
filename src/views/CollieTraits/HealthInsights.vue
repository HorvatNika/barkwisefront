<template>
  <div class="border-collie-info">
    <div class="title-box">
      <div class="page-title">new border collie health insights: understanding common health issues</div>
      <div class="content">
        <p>
          Border Collies are celebrated for their intelligence, agility, and loyalty, but like any breed, they are susceptible to certain health conditions. By understanding these issues and prioritizing regular health care, owners can ensure their Border Collies live long, healthy lives.
        </p>

        <h3>Hip Dysplasia: A Structural Concern</h3>
        <p>
          Hip dysplasia is a common condition in many dog breeds, including Border Collies. This genetic disorder affects the hip joint, leading to discomfort and reduced mobility over time. Symptoms may include stiffness, difficulty rising, or an altered gait.
        </p>
        <p>
          Preventative measures like maintaining a healthy weight, providing appropriate exercise, and regular vet check-ups can help manage this condition. In severe cases, treatments such as medication or surgery may be necessary to improve your dog's quality of life.
        </p>

        <h3>Epilepsy: Managing Seizures</h3>
        <p>
          Border Collies are predisposed to epilepsy, a neurological disorder that causes recurring seizures. While witnessing a seizure can be distressing for owners, epilepsy is often manageable with the right treatment plan.
        </p>
        <p>
          Medications prescribed by a veterinarian can reduce the frequency and severity of seizures, allowing affected dogs to lead normal, active lives. Early diagnosis and consistent monitoring are key to successful management.
        </p>

        <h3>Collie Eye Anomaly (CEA): An Inherited Issue</h3>
        <p>
          Collie Eye Anomaly (CEA) is an inherited condition that affects the development of the retina. This issue can range from mild, with no noticeable symptoms, to severe, potentially leading to blindness.
        </p>
        <p>
          Responsible breeding practices have helped reduce the prevalence of CEA. DNA testing can identify carriers of the condition, and regular eye exams are crucial for early detection and monitoring.
        </p>

        <h3>Routine Vet Care: The Key to Longevity</h3>
        <p>
          Regular veterinary check-ups are essential for catching health problems early. Annual exams, vaccinations, and routine blood tests can help monitor your Border Collie’s overall health. Discuss any breed-specific concerns with your vet to ensure a comprehensive care plan.
        </p>

        <h3>Proactive Health Management</h3>
        <p>
          In addition to professional care, owners can take proactive steps to support their Border Collie’s health. A balanced diet, regular exercise, and mental stimulation are crucial for their physical and emotional well-being. Providing joint supplements, especially for aging dogs, can also help maintain mobility and comfort.
        </p>

        <h3>Empowered Ownership for a Healthy Life</h3>
        <p>
          While Border Collies may face certain health challenges, early detection and preventative care can make a significant difference. By staying informed and working closely with a trusted veterinarian, owners can ensure their Border Collies lead vibrant, happy lives.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BorderCollieHealth",
};
</script>

<style scoped>
.border-collie-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #eeeee6;
  min-height: 100vh;
  padding: 2rem;
}

.title-box {
  display: flex;
  flex-direction: column;
  background-color: #fffef9;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  margin: 2rem auto;
}

.page-title {
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 5rem;
  color: #AEEBBA;
  text-align: center;
  opacity: 70%;
  margin-bottom: 0.2rem;
  line-height: 0.7;
}

.content {
  font-family: CenturyGothic, sans-serif;
  color: #5f5f5f;
  line-height: 1.6;
  text-align: left;
}

.content h3 {
  color: #AEEBBA;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem; 
}

.content p {
  text-align: left;
  margin-top: 0.8rem; 
  font-size: 1rem;
}
</style>
