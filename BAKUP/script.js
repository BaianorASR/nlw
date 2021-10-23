const linksSocialMedia = {
  github: 'BaianorASR',
  youtube:
    'watch?v=fCQufN8Wsgc&list=PLEekdKwBpPfDQmKkTx-AX2TNj5hzlPk2l&index=142',
  instagram: 'BaianorASR',
  facebook: 'BaianorASR',
  twitter: 'BaianorASR'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      profilePhoto.src = data.avatar_url
      githubLogin.href = data.html_url
      githubName.textContent = data.login
    })
}
getGitHubProfileInfos()

function animationsFigures() {
  const linkColor = document.getElementById('githubName')
  linkColor.addEventListener('mouseenter', event => {
    linkColor.style.color = '#3240a8'
  })

  linkColor.addEventListener('mouseout', event => {
    linkColor.style.color = '#e1e1e6'
  })
}
animationsFigures()
