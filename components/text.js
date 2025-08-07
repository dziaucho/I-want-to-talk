function createText(cls, value, parent) {
    const text = document.createElement("p");
    text.classList.add(cls);
    text.innerText = `${value}`;
    parent.appendChild(text);
    return text;
}

export default createText;
