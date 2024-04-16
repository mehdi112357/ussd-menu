
import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import {AiOutlineCaretLeft, AiOutlineCaretRight} from "react-icons/ai";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paddingFrame: {
        paddingRight: 15,
        paddingLeft: 15
    },
    thumb: {
        width: 55,
        height: 55,
        position: 'relative',
        top: -22,
        background: "#000",
    },
    rail: {
        background: '#dbe6d5',
        height: 7
    },
    svgIcon: {
        color: '#fff'
    },
}));


export default function AirBnbSlider({defaultValue, onChangeSlider}) {
    const classes = useStyles();
    const [sliderValue, setSliderValue] = useState(30);

    useEffect(() => {
        setSliderValue(defaultValue);
    }, []);

    const handleChange = (event, newValue) => {
        setSliderValue(newValue);
        onChangeSlider(newValue)
    };

    function AirbnbThumbComponent(props) {
        return (
            <span {...props}>
                <AiOutlineCaretLeft className={classes.svgIcon} />
                <AiOutlineCaretRight className={classes.svgIcon} />
            </span>
        );
    }
    return (
        <div className={[classes.root, 'airBnbSlider'].join(' ')}>
            <Slider
                classes={{
                    thumb: classes.thumb,
                    rail: classes.rail,
                }}
                min={1}
                max={77}
                ThumbComponent={AirbnbThumbComponent}
                onChange={handleChange}
                defaultValue={sliderValue}
                value={sliderValue}
                aria-label="Small"
                marks={false}
                valueLabelDisplay="auto"
            />
        </div>
    );
}
