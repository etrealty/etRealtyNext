import { returnSingleHome } from "../../utils/returnSingleHome";
import { GetServerSideProps } from 'next'

type Props = {
    home: Object | any
}

const HomeInfo = ({ home }: Props  ) => {
    console.log(home)


    return (
        <div>

        </div>
    )

}

export default HomeInfo;


export const getServerSideProps: GetServerSideProps = async (context) => {
    if(context == undefined) return
    if(context.params == undefined) return
    const { id } = context.params
    const home = await returnSingleHome(id)
    if(home === undefined) return
    return { props: {}
        } 

}
