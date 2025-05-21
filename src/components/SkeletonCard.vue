<template>
    <div class="skeleton-card">
      <div class="skeleton-thumbnail"></div>
      <div class="skeleton-line short"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
    </div>
</template>
<style scoped>
  .skeleton-card {
    background: #fff;
    border: 1px solid #eee;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
    width: 100%;
    height: 100%;
    animation: pulse 1.5s infinite;
  }
  
  .skeleton-thumbnail {
    height: 150px;
    border-radius: 8px;
    background: #e0e0e0;
    margin-bottom: 16px;
  }
  
  .skeleton-line {
    height: 14px;
    background: #e0e0e0;
    margin-bottom: 10px;
    border-radius: 6px;
  }
  
  .skeleton-line.short {
    width: 60%;
  }
  
  .skeleton-line:not(.short) {
    width: 100%;
  }
  
  @keyframes pulse {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #e0e0e0;
    }
  }
</style>
  
  