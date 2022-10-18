import { onAuthStateChanged } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useRef, useState } from 'react';
import { auth, db } from '../utils/firebase.config';

const CommentPost = ({ post }) => {

    const [user, setUser] = useState(null);
    const anwserContent = useRef();

    const handleComment = (e) => {
        e.preventDefault();

        let data = [
            {
                commentAuthor: user.displayName,
                text: anwserContent.current.value,
            },
        ];

        updateDoc(doc(db, "posts", post.id), { comments: data })
        anwserContent.current.value = "";
    };

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    return (
        <div className="comment-container">
            <h5 className="comment-title">Commentaires</h5>
            {/* Map */}

            {user ? (
                <form onSubmit={(e) => handleComment(e)}>
                    <textarea placeholder='Envoyer un commentaire' ref={anwserContent}></textarea>
                    <input type="submit" value="Envoyer" />
                </form>
            ) : (
                <p>Vous devez être connecté pour envoyer un commentaire</p>
            )}
        </div>
    );
};

export default CommentPost;