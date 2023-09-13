import React, { useEffect, useState } from 'react'
import genereIcon from '../../assets/svg/gener.svg'
import styles from '../MovieDetails/movieDetails.module.scss'
import { AiFillStar,AiTwotoneLike} from 'react-icons/ai'
import { BsDownload, BsFillShareFill } from 'react-icons/bs'
import { SlLike } from 'react-icons/sl'
import topcast from '../../assets/images/topcast.png'
import { useParams } from 'react-router-dom'
import { client, urlFor } from '../../Service/sanity'
import Button from '../../Atoms/Button/Button'
import Skeleton from '../Loader'


function DetailsCenter() {
    const [review, setReview] = useState('')
    const [showComment, setShowComment] = useState(true)
    const [comments, setComments] = useState([]);
    const [movies, setMovies] = useState(null)
    const [like,setLike] = useState(false)
    const { moviesSlug } = useParams();


    useEffect(() => {
        const storedLike = localStorage.getItem('likedMovie');
        if (storedLike) {
            setLike(true);
        }
    }, []);

 
    useEffect(() => {
        if (like) {
            localStorage.setItem('likedMovie', 'true');
        } else {
            localStorage.removeItem('likedMovie');
        }
    }, [like]);

    useEffect(() => {
        client.fetch('*[_type == "action"]').then((res) => {
            const thisMovies = res.find((m) => m.slug.current === moviesSlug);
            setMovies(thisMovies);
        });
    }, [moviesSlug]);


    useEffect(() => {
        client.fetch('*[ _type =="review" ]').then((res) => {
            console.log(res);
            setComments(res)
        })
    }, [comments])

    function handleReview(e) {
        console.log(e.target.value);
        setReview(e.target.value);
    }

    function handleAddReview() {
        setShowComment(false);
        if (review) {
            const newComment = review;
            setComments([...comments, newComment])
            setReview('');
            setShowComment(true)
            client.create({
                _type: "review",
                comment: newComment
            }).then((res) => {
                console.log(res);
            })
        }
    }

    function handleLike(){
        setLike(!like)
    }

    if (!movies) {
        return <Skeleton width="w-[64%]"/>;
    }
    return (
        <div className={styles.DetailsCenter}>
            <figure>
                <img src={urlFor(movies.image)} alt="" />
            </figure>
            <div className={styles.MovieInfo}>
                <div className={styles.MovieInfo__left}>
                    <h6>PG-13</h6>
                    <h4>{movies.title}</h4>
                    <div className={styles.MovieInfo__left__gener}>
                        <img src={genereIcon} alt="" />
                        <h4>{movies.gener}</h4>
                    </div>
                    <div className={styles.MovieInfo__left__imdb}>
                        <AiFillStar style={{ color: "yellow" }} />
                        <p>{movies.imdb}</p>
                    </div>
                </div>
                <div className={styles.MovieInfo__right}>
                    <div className={styles.btn}>
                        <BsDownload />
                        <p>Download</p>
                    </div>
                    <div className={styles.btn}>
                        <BsFillShareFill />
                        <p>Share</p>
                    </div>
                    <div id='like' className={!like ? styles.btn : styles.like}>
                        {!like ? <SlLike onClick={handleLike} /> : <AiTwotoneLike onClick={handleLike}/>}
                        <p>Like</p>
                    </div>


                </div>
            </div>
            <div className={styles.StoryLine}>
                <h4>Story Line</h4>
                <p>{movies.description}</p>

            </div>
            <div className={styles.review}>
                <textarea onChange={handleReview} value={review} maxLength="200" name="comment" id="personView"></textarea>
                <div className={styles.review_btn}>
                    <Button onClick={handleAddReview} disabled={!review}>Send</Button>
                </div>
            </div>
            <div className={styles.comment}>
                <h4>Reviews</h4>
                {showComment && (
                    <>
                        {comments.map((comment, index) => (
                            <p key={index} className={styles.active}>
                                {comment.comment}
                            </p>
                        ))}
                    </>
                )}
            </div>
            <div className={styles.topCast}>
                <div className={styles.title}>
                    <h4>Top Cast</h4>
                </div>
                <div className={styles.topCast_cards}>
                    <div className={styles.topCast_cards_card}>
                        <figure>
                            <img src={topcast} alt="" />
                        </figure>
                        <div className={styles.content}>
                            <h4>Robert Pattinson</h4>
                            <h6>Bruce Wayne</h6>
                        </div>
                    </div>
                    <div className={styles.topCast_cards_card}>
                        <figure>
                            <img src={topcast} alt="" />
                        </figure>
                        <div className={styles.content}>
                            <h4>Robert Pattinson</h4>
                            <h6>Bruce Wayne</h6>
                        </div>
                    </div>
                    <div className={styles.topCast_cards_card}>
                        <figure>
                            <img src={topcast} alt="" />
                        </figure>
                        <div className={styles.content}>
                            <h4>Robert Pattinson</h4>
                            <h6>Bruce Wayne</h6>
                        </div>
                    </div>
                    <div className={styles.topCast_cards_card}>
                        <figure>
                            <img src={topcast} alt="" />
                        </figure>
                        <div className={styles.content}>
                            <h4>Robert Pattinson</h4>
                            <h6>Bruce Wayne</h6>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DetailsCenter