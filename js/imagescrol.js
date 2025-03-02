// 修改imagescrol.js
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider-container');
    const track = document.querySelector('.image-track');
    const pagination = document.querySelector('.pagination-dots');
    const items = Array.from(track.children);
    let currentIndex = 0;
    let autoScrollInterval;
    let isAnimating = false;
  
    // 创建分页点
    function createPagination() {
      pagination.innerHTML = items
        .map((_, i) => `<div class="dot" data-index="${i}"></div>`)
        .join('');
      pagination.children[0].classList.add('active');
    }
  
    // 更新分页状态
    function updatePagination(index) {
      Array.from(pagination.children).forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }
  
    // 计算滚动位置
    function getScrollPosition(index) {
      const itemWidth = items[index].offsetWidth;
      const containerWidth = slider.offsetWidth;
      return index * itemWidth - (containerWidth - itemWidth) / 2;
    }
  
    // 滚动到指定位置
    function scrollToIndex(index) {
      if (isAnimating || index < 0 || index >= items.length) return;
      
      isAnimating = true;
      currentIndex = index;
      updatePagination(index);
      
      track.style.transform = `translateX(-${getScrollPosition(index)}px)`;
      
      setTimeout(() => {
        isAnimating = false;
      }, 500);
    }
  
    // 自动滚动逻辑
    function startAutoScroll() {
      autoScrollInterval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % items.length;
        scrollToIndex(nextIndex);
      }, 2500); // 2秒滚动 + 0.5秒暂停
    }
  
    // 处理分页点击
    function handleDotClick(e) {
      const dot = e.target.closest('.dot');
      if (!dot) return;
      
      const targetIndex = parseInt(dot.dataset.index);
      clearInterval(autoScrollInterval);
      scrollToIndex(targetIndex);
      startAutoScroll();
    }
  
    // 初始化
    function init() {
      createPagination();
      startAutoScroll();
      pagination.addEventListener('click', handleDotClick);
      
      // 响应式处理
      window.addEventListener('resize', () => {
        track.style.transition = 'none';
        track.style.transform = `translateX(-${getScrollPosition(currentIndex)}px)`;
        setTimeout(() => track.style.transition = 'transform 0.5s ease-in-out');
      });
    }
  
    init();
  });