const linksSocialMedia = {
  github: 'BaianorASR',
  youtube: 'watch?v=bjiEopV9DFc',
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
