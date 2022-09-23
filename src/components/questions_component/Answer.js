function Answer(props) {
    if (props.isShown) {
        return props.answer;
    }
    return '';
}

export default Answer;