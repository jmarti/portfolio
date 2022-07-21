export const isHomepage = (layoutMainNodeElement: HTMLElement) => {
    return layoutMainNodeElement.querySelector('[data-uri]')?.getAttribute('data-uri') === '/'
}