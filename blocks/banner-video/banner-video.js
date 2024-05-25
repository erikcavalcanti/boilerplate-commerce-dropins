/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
export default function decorate(block) {
    const videoSrc = block.querySelector('p>a').text;
    const video = document.createElement('video');
    video.src = videoSrc;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.classList.add('cmp-banner-video');
    video.setAttribute('data-test', 'cmp-banner-video');
    const title = document.createElement('span')
    if (block.querySelector('div :nth-child(2) > p')) {
        const titleText = block.querySelector('div :nth-child(2) > p').textContent;
        title.textContent = titleText;
        title.classList.add('banner-video-text')
        title.classList.add('title')
    }
    const description = document.createElement('span');
    const descriptionText = block.querySelectorAll('div :nth-child(3) > p')
    console.log('descriptionText', descriptionText)
    if (descriptionText.length > 0) {
        description.classList.add('banner-video-text')
        description.classList.add('description')
        description.innerHTML = `${descriptionText[0].textContent}<br>${descriptionText[1].textContent}`;
    }
    block.innerHTML = '';
    block.appendChild(video);
    block.appendChild(title);
    block.appendChild(description);
}
