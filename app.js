let author = 'Muath';
let newTweetText = document.querySelector('.post-tweet-text');
let tweetButton = document.querySelector('.post-tweet-button');
let arrayOfTweets = [{
    author: author,
    tweetText: "This tweet for test looping"
}]
let centerSection = document.querySelector('.center');
let tweetsBox = document.querySelector('.new-feeds');
centerSection.appendChild(tweetsBox);

function builtTweet() {
    arrayOfTweets.forEach((tweet) => {
        let newFeedTweet = document.createElement('div');
        tweetsBox.prepend(newFeedTweet);
        newFeedTweet.className = 'new-feed-tweet';

        let user = document.createElement('h4');
        newFeedTweet.appendChild(user);
        user.className = 'new-feed-tweet-username';
        user.textContent = tweet.author;



        let newText = document.createElement('p')
        newFeedTweet.appendChild(newText)
        newText.className = 'new-feed-tweet-text'
        newText.textContent = tweet.tweetText;

        let listIcons = document.createElement('ul');
        listIcons.className = "new-feed-tweet-list"
        newFeedTweet.appendChild(listIcons);


        let icons = document.createElement('li');
        icons.className = "new-feed-tweet-lis-item"
        listIcons.appendChild(icons);


        let likeIcon = document.createElement('i');
        likeIcon.addEventListener('click', (e) => {
            if (e.currentTarget.parentNode.parentNode.parentNode.style.backgroundColor) {
                return e.currentTarget.parentNode.parentNode.parentNode.style.backgroundColor = null;
            } else {
                return e.currentTarget.parentNode.parentNode.parentNode.style.backgroundColor = "Gainsboro"
            }
        })
        likeIcon.className = 'new-feed-tweet-list-item heart-icon far fa-heart';
        icons.appendChild(likeIcon)


        let retweetIcon = document.createElement('i')
        retweetIcon.addEventListener('click', (e) => {
            let author = e.currentTarget.parentNode.parentNode.parentNode.childNodes[0].textContent;
            let tweetText = e.currentTarget.parentNode.parentNode.parentNode.childNodes[1].textContent;
            let tweetDetails = { author: author, tweetText };
            arrayOfTweets.push(tweetDetails);
            tweetsBox.textContent = "";
            builtTweet();
        })
        retweetIcon.className = 'new-feed-tweet-list-item retweet-icon fas fa-retweet'
        icons.appendChild(retweetIcon)

    })
}

tweetButton.addEventListener('click', (e) => {
    let tweetDetails = {
        author: author,
        tweetText: newTweetText.value
    };
    arrayOfTweets.push(tweetDetails)
    e.preventDefault();
    tweetsBox.textContent = "";
    builtTweet()
    newTweetText.value = ""


});

function clicker() {

}