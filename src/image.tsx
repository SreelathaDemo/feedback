import React from 'react';
import ImageUploader from 'react-images-upload';

export default class Image extends React.Component {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles: any, pictureDataURLs: any) {
        this.setState({
            pictures: pictureFiles
        });
    }

    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif','jpeg']}
                 maxFileSize={52428800}
            />
        );
    }
}