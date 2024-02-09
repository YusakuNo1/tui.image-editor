import { getHelpMenuBarPosition } from '@/util';

export default ({ locale, biImage, downloadButtonStyle, menuBarPosition }) => `
    <ul class="tui-image-editor-help-menu ${getHelpMenuBarPosition(menuBarPosition)}"></ul>
    <div class="tui-image-editor-controls">
        <div class="tui-image-editor-controls-logo">
            <img src="${biImage}" />
        </div>
        <ul class="tui-image-editor-menu"></ul>

        <div class="tui-image-editor-controls-buttons">
            <button class="tui-image-editor-download-btn" style="${downloadButtonStyle}">
                ${locale.localize('Finish')}
            </button>
        </div>
    </div>
`;
