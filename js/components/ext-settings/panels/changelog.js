module.exports = Storage => {
    const content = document.createElement('div');
    content.classList.add('Mess-setting-panel');
    content.id = 'Mess-panel-changelog';

    content.textContent = 'Change Log';

    return content;
};
