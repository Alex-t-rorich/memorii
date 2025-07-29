<template>
  <div class="homepage">
    <Hero />
    <PageSelector @card-selected="handleCardSelection" />
    <Content />
    <Carousel />
    <What />
    <Partners />
    <Book />
  </div>
</template>

<script setup>

// Set page meta
definePageMeta({
  title: 'Home'
})

// Set SEO head
useHead({
  title: 'Home - Your Nuxt 3 App',
  meta: [
    {
      name: 'description',
      content: 'Welcome to your new Nuxt 3 application'
    }
  ]
})

// Handle card selection from Hero component
const handleCardSelection = (cardType) => {
  console.log('Selected card:', cardType)
  // You can add more logic here to change other content based on selection
}
</script>

<style scoped>
/* .homepage {
  min-height: calc(100vh - 64px);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}
.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}
.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-primary {
  background-color: white;
  color: #667eea;
}
.btn-primary:hover {
  background-color: #f8f9fa;
  transform: translateY(-2px);
}
.btn-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}
.btn-secondary:hover {
  background-color: white;
  color: #667eea;
}
.features {
  padding: 4rem 0;
  background-color: #f8f9fa;
}
.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}
.feature-card p {
  color: #666;
  line-height: 1.6;
}
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
 
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
 
  .btn {
    width: 200px;
  }
} */
</style>