import React from 'react';
import { ColForm, TextBox, ColLabel, ColInput, RoundedBtn } from './Styles';

const ReviewForm = (props) => {

    return (
        <div>
            <ColForm>
                <h3>Write a Review</h3>
                <div>
                    <TextBox name="" id="" cols="30" rows="10"></TextBox>
                </div>
                <RoundedBtn>Submit</RoundedBtn>
            </ColForm>
        </div>
    )
}

export default ReviewForm;