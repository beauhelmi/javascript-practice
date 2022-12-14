'use strict';

const e = React.createElement;

function LikeButton(props) {
    const [liked,setLiked] = React.useState(false)

    if (liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => setLiked(true) },
      'Like'
    );
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));