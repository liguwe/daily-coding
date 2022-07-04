import Com1 from "../components/com1";
import com2 from "../components/com2";

// todo
let pageData = {
    init:'',

    components: [
        {
            type: 'Header',
            init: '/api/headerData',
            reqBefore: (api, data, header) => {

            },
            resBefore: (api, data, header) => {

            }
        },
        {
            type: 'Content',
            init: '',
            data: [],
            components: [
                {
                    type: 'Com1',
                    init: '/api/headerData',
                },
                {
                    type: 'Com2',
                    init: '/api/headerData',
                }
            ]
        },
        {
            type: 'Footer',
            init: '',
            data: [],
            components: [
                {
                    type: 'Com1',
                    init: '/api/headerData',
                },
                {
                    type: 'Com2',
                    init: '/api/headerData',
                }
            ]
        }
    ]
}

export class IndexPage extends React{

    componentDidMounted(){
        // todo 根据拿参数应用id去获取配置
        fetch('/api/id=xxxxx',()=>{
            this.setState({
                pageData:pageData
            })
        })
    }

    render() {
        return renderSDK.render(this.state.pageData);
    }
}
