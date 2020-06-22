export function randomNumber(min: number, max: number, even?: boolean): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    const result = Math.floor(Math.random() * (max - min)) + min 
    if (even && result % 2 !== 0) return randomNumber(min, max, even)
    else return result
}

export function randomColor(): number {
    return randomNumber(1, 0xffffff)
}

export function setHtmlElementValue(element: HTMLElement | null, value: string): void {
    if (element) element.innerHTML = value
}

export function addEventListenerToElement(id: string, event: string, handler: (e: Event) => void): void {
    const element =  document.getElementById(id)
    if (element) element.addEventListener(event, handler)
}