import { Component } from 'react'



class DRYButton extends Component {

    onClick = e => {
        // ... does some job
        alert('clicked')
    }

    render() {
        return (
            <ContainerWithProp>
                <Component prop={prop}>
                    <InnerComponent prop={prop}>
                        <MoarInnerComponet prop={prop} />
                    </InnerComponent>
                </Component>
            </ContainerWithProp>
        
        )
    }
}