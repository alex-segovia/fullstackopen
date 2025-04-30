import StatisticLine from "./StatisticLine"

const Statistics = ({ good, neutral, bad }) => {
    const all = good+neutral+bad
    const average = ((1*good+0*neutral-1*bad)/all).toFixed(1)
    const positive = (100*good/all).toFixed(1)

    if (all===0){
        return (
            <>
                <p>No feedback given</p>
            </>
        )
    }else{
        return (
            <>
                <StatisticLine text={'good'} value={good} />
                <StatisticLine text={'neutral'} value={neutral} />
                <StatisticLine text={'bad'} value={bad} />
                <StatisticLine text={'all'} value={all} />
                <StatisticLine text={'average'} value={average} />
                <StatisticLine text={'positive'} value={positive+' %'} />
            </>
        )
    }    
}

export default Statistics