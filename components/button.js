function createButton(cls, value, parent) {
    const button = document.createElement("button");
    button.classList.add(cls);
    button.innerText = `${value}`;
    parent.appendChild(button);
    return button;
}

export default createButton;