document.querySelectorAll('.asset').forEach(assetNode => {
  assetNode.addEventListener('click', () => {
    document.querySelector('.asset-container.active').classList.replace('active', 'inactive')
    const targetContainer = document.getElementById(assetNode.dataset.target)
    targetContainer.classList.remove('inactive')
    targetContainer.classList.add('active')
  })
})