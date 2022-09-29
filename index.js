const Button = (props) => {
  const { name, className } = props;
  //  Write your code here.
  return <button className={className}>{name}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Media Buttons</h1>
    <div>
      <Button name="Like" className="like-button" />
      <Button name="Comment" className="comment-button" />
      <Button name="Share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
