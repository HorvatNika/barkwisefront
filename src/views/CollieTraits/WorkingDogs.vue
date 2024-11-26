<template>
  <div class="border-collie-info">
    <div class="title-box">
      <div class="page-title">why border collies are the ultimate working dogs</div>
      <div class="content">
        <p>
          Border Collies have earned their place as the epitome of working dogs. Known for their unparalleled intelligence, boundless energy, and unwavering loyalty, this breed thrives in environments that challenge both their minds and bodies. Their unique combination of traits makes them exceptional companions for those who can keep up with their high demands.
        </p>

        <h3>Unmatched Intelligence</h3>
        <p>
          Border Collies are widely regarded as the most intelligent dog breed. This title is backed by their ability to learn complex tasks quickly and execute them with precision. Originally bred to herd sheep in the rugged landscapes of Scotland and England, their problem-solving skills are unparalleled. They can assess a situation, anticipate movements, and respond with remarkable adaptability—all without missing a beat.
        </p>
        <p>
          This intelligence makes them stars in agility trials, obedience competitions, and other canine sports. Their capacity to learn commands, even those requiring intricate sequences, is unmatched. With the right training, there’s virtually no limit to what a Border Collie can achieve.
        </p>

        <h3>Boundless Energy</h3>
        <p>
          One of the defining characteristics of the Border Collie is their incredible stamina. These dogs are built for action and can work tirelessly for hours. Their high energy levels are a double-edged sword: while they make exceptional partners for active lifestyles, they can become frustrated or destructive without adequate outlets for their energy.
        </p>

        <h3>Loyal and Attentive Companions</h3>
        <p>
          Beyond their working abilities, Border Collies are deeply loyal to their families. They form strong bonds with their humans and are happiest when they have a purpose, whether it's herding sheep or simply sticking close to their owners. Their loyalty often extends to being protective, making them attentive watchdogs without excessive aggression.
        </p>

        <h3>Mental Stimulation Is Essential</h3>
        <p>
          In addition to physical exercise, Border Collies require constant mental engagement. Puzzle toys, training sessions, and tasks like fetching specific objects can help satisfy their sharp minds. Without such stimulation, they may become bored and exhibit undesirable behaviors like excessive barking or chewing.
        </p>

        <h3>Perfect for the Right Owner</h3>
        <p>
          While Border Collies are undeniably amazing, they aren’t for everyone. Their intelligence, energy, and loyalty come with the responsibility of providing them with a stimulating environment. For those who can meet their needs, Border Collies are more than just pets—they’re partners, teammates, and loyal friends.
        </p>
        <p>
          Whether on the farm, in the agility ring, or by your side during a long hike, Border Collies exemplify what it means to be a working dog. Their unmatched combination of intelligence, energy, and loyalty makes them truly one of a kind.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BorderCollieInfo",
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
  line-height: 0.8; 
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
  margin-bottom: 0.2rem;
}

.content p {
  text-align: left;
  margin-top: 0.6rem;
  font-size: 1rem;
}
</style>