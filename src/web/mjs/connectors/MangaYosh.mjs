import WordPressMadara from './templates/WordPressMadara.mjs';

export default class MangaYosh extends WordPressMadara {

    constructor() {
        super();
        super.id = 'mangayosh';
        super.label = 'MangaYosh';
        this.tags = [ 'manga', 'webtoon', 'indonesian' ];
        this.url = 'https://mangayosh.xyz';
        this.oldURL = 'https://mangayosh.bloghadi.me';
    }

    async _getChapters(manga) {
        let chapterList = await super._getChapters(manga);
        chapterList.forEach(chapter => chapter.id = this._decryptChapterID(chapter.id));
        return chapterList;
    }

    _decryptChapterID(chapterID) {
        if(chapterID.includes('subetenews.com') || chapterID.includes('tranivson.me')) {
            return this._decryptSubeteNews(chapterID);
        }
        if(chapterID.includes('l.wl.co')) {
            return this._decryptWL(chapterID);
        }
        return this.getRootRelativeOrAbsoluteLink(chapterID.replace(this.oldURL, this.url), this.url);
    }

    _decryptSubeteNews(chapterID) {
        let uri = new URL(chapterID, this.url);
        let link = atob(uri.searchParams.get('r'));
        return this._decryptChapterID(link);
    }

    _decryptWL(chapterID) {
        let uri = new URL(chapterID, this.url);
        let link = uri.searchParams.get('u');
        return this._decryptChapterID(link);
    }
}