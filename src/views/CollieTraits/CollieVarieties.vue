<template>
  <div class="border-collie-coat-info">
    <div class="title-box">
      <div class="page-title">the colorful world of border collies: exploring coat colors and patterns</div>
      <div class="content">
        <p>
          Border Collies are not only known for their intelligence and work ethic but also for their striking and diverse coat colors. From the classic black-and-white to the rare merle, the Border Collie comes in a variety of stunning hues and patterns. Each coat variation is a reflection of the breed's genetics and heritage, adding to their allure and charm. In this article, we’ll explore the different coat colors and patterns of Border Collies and how these genetic traits play a role in their health.
        </p>

        <h3>Classic Black-and-White</h3>
        <p>
          The black-and-white coat pattern is the most iconic and instantly recognizable among Border Collies. This classic combination of black and white can appear in various ways, from symmetrical patterns to more random splotches of color. This striking contrast not only makes them stand out but also ties them closely to the breed’s working history, often seen herding sheep on farms.
        </p>

        <h3>Tricolor Border Collies</h3>
        <p>
          Tricolor Border Collies are equally captivating, with a blend of black, white, and tan in their coat. The tan markings usually appear on the legs, eyebrows, chest, and under the tail, adding depth and richness to their appearance. This pattern is not as common as the black-and-white, but it’s highly prized for its beautiful combination of colors.
        </p>

        <h3>The Rare Merle Coat</h3>
        <p>
          Merle Border Collies possess a striking coat pattern with patches of diluted color, often blue or red, mixed with the base coat. This pattern is due to a specific genetic mutation and is considered rare. Merle Border Collies are unique and highly sought after for their stunning appearance, although the merle gene can sometimes lead to health concerns, particularly affecting vision and hearing.
        </p>

        <h3>Other Coat Variations</h3>
        <p>
          In addition to the classic black-and-white, tricolor, and merle, Border Collies can also display other colors like red, sable, or blue. Some Border Collies may have a solid color coat, though this is much less common. The diverse range of coat colors, combined with different patterns, makes each Border Collie visually unique.
        </p>

        <h3>Genetics and Health Considerations</h3>
        <p>
          While the coat color is largely a matter of genetics, it can also influence certain health traits. For example, the merle coat pattern, while stunning, can sometimes be associated with genetic issues, such as deafness or vision impairments, especially when two merle dogs are bred together. Understanding the genetics behind a Border Collie’s coat can help potential owners be aware of these risks.
        </p>

        <h3>Choosing the Right Border Collie</h3>
        <p>
          Whether you're drawn to the classic black-and-white Border Collie or the rare merle, each color and pattern tells a story of the dog's heritage. It's important for prospective owners to consider both the aesthetic appeal and the potential health aspects related to these patterns. No matter the coat color, all Border Collies share the same intelligence, energy, and loyalty that make them one of the most beloved dog breeds.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BorderCollieCoatInfo",
};
</script>

<style scoped>
.border-collie-coat-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f9f9f9;
  min-height: 100vh;
  padding: 2rem;
}

.title-box {
  display: flex;
  flex-direction: column;
  background-color: #fff;
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
