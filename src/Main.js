import ReactMarkDown from "react-markdown";

function Main({ activeNote,onUpdateNote }){
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lasModified: Date.now()
        });
    };

    if(!activeNote) return <div className="no-active-note">Tidak ada Catatan yang dipilih</div>

    return (
    <div className="app-main">
        <div className="app-main-note-edit">
            <input 
                type="text" 
                id="title" 
                value={activeNote.title} 
                onChange={(e) => onEditField("title", e.target.value )} 
                autoFocus 
            />
            <textarea  
                id="body" 
                placeholder="Tuliskan catatanmu di sini ...." 
                value={activeNote.body}
                onChange={(e) => onEditField("body", e.target.value )} 
            />
        </div>
        <div className="app-main-note-preview">
            <h1 className="preview-title">{activeNote.title}</h1>
            <ReactMarkDown className="markdown-preview">
                {activeNote.body}
            </ReactMarkDown>
        </div>
    </div>
    );
}

export default Main;