
function CompItems(props) {
  return (
    <li className="CompIntems">
      <span id="check" className={`material-icons ${props.completed && "icon-check--active"} `}
        onClick={props.onComplid}
      >check_circle</span>
      <p className={`p-itmem ${props.completed && "p-itmem--completed"} `}>{props.text}</p>
      <span id="cancel" className="material-icons icon-cancel--delete"
        onClick={props.onDelete}
      >cancel</span>

    </li>

  );
}

export { CompItems };