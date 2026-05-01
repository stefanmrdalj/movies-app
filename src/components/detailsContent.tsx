import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import type { DetailsData, CastMember, DetailsPageData } from "../modules/types";
import "../style/detailsContent.scss";
import { moviesAndTvShowsStore } from "../modules/moviesAndTvShowsStore";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

const BACKDROP_IMAGE_BASE = "https://image.tmdb.org/t/p/w1280";
const POSTER_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
const PROFILE_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

const DetailsContent = observer(() => {
  const { id, type } = useParams();

  const [detailsPageData, setDetailsPageData] = useState<DetailsPageData>({
    details: null,
    casts: [],
  });

  useEffect(() => {
    if (!id || !type) return;

    const fetchDetailsPageData = async () => {
      const mediaType = type === "movie" ? "movie" : "tv";

      const detailsResponse = await axiosInstance.get<DetailsData>(`/${mediaType}/${id}`);

      const creditsResponse = await axiosInstance.get<{ cast: CastMember[] }>(`/${mediaType}/${id}/credits`);

      setDetailsPageData({
        details: detailsResponse.data,
        casts: creditsResponse.data.cast,
      });
    };

    fetchDetailsPageData();
  }, [id, type]);

  useEffect(() => {
    if (!id || !type) return;

    moviesAndTvShowsStore.getMediaTrailer(type as "movie" | "tv", id);
    moviesAndTvShowsStore.getSimilarMedia(type as "movie" | "tv", id);
  }, [id, type]);

  const { details, casts } = detailsPageData;
  if (!details) return null;

  const title = details.title || details.name || "";

  return (
    <div className="detailsPageContent">
      <div
        className="detailsContent"
        style={{
          backgroundImage: details.backdrop_path ? `url(${BACKDROP_IMAGE_BASE}${details.backdrop_path})` : "none",
        }}
      >
        <div className="detailsContent-overlay">
          <div className="detailsContent-wrapper">
            <div className="detailsContent-poster">
              <img src={details.poster_path ? `${POSTER_IMAGE_BASE}${details.poster_path}` : undefined} alt={title} />
            </div>

            <div className="detailsContent-info">
              <div className="detailsContent-title">
                <h1>{title}</h1>
              </div>

              <div className="detailsContent-genre">
                {details.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </div>

              <div className="detailsContent-description">
                <p>{details.overview}</p>
              </div>

              <div className="detailsContent-casts">
                <h3>Casts</h3>

                <div className="detailsContent-castList">
                  {casts.slice(0, 8).map((cast) => (
                    <div className="detailsContent-castCard" key={cast.id}>
                      <img
                        src={cast.profile_path ? `${PROFILE_IMAGE_BASE}${cast.profile_path}` : undefined}
                        alt={cast.name}
                      />
                      <p>{cast.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TRAILER SECTION */}
      <div className="detailsTrailer">
        <h3>Trailer</h3>
        {moviesAndTvShowsStore.mediaTrailerKey ? (
          <iframe
            src={`https://www.youtube.com/embed/${moviesAndTvShowsStore.mediaTrailerKey}`}
            title="Trailer"
            allowFullScreen
          />
        ) : (
          <p>No trailer available.</p>
        )}
      </div>

      {/* SIMILAR SECTION */}
      <div className="detailsSimilar">
        <h3>Similar</h3>
        <div className="detailsSimilar-cards">
          {moviesAndTvShowsStore.similarMedia.map((item) => (
            <NavLink
              to={`/details/${"title" in item ? "movie" : "tv"}/${item.id}`}
              className="detailsSimilar-card"
              key={item.id}
            >
              <div className="detailsSimilar-cardPhoto">
                <img src={item.poster_path} alt="" />
              </div>

              <div className="detailsSimilar-cardTitle">
                <h4>{"title" in item ? item.title : item.name}</h4>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
});

export default DetailsContent;
