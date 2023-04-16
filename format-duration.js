function formatDuration(totalSeconds) {
    
    if(totalSeconds === 0) {
        return `now`
    }
    
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 86400) % 365
    const years = Math.floor(totalSeconds / 31_536_000) % 9999

    let yearFormat = `${years > 0 ? years + ' year' : ''}${years > 1 ? 's' : ''}${years > 0 ? ', ' : ''}`
    let dayFormat = `${days > 0 ? days + ' day' : ''}${days > 1 ? 's' : ''}${days > 0 ? ', ' : ''}`
    let hourFormat = `${hours > 0 ? hours + ' hour' : ''}${hours > 1 ? 's' : ''}${hours > 0 ? ', ' : ''}`
    let minuteFormat = `${minutes > 0 ? minutes + ' minute' : ''}${minutes > 1 ? 's' : ''}${minutes > 0 ? ', ' : ''}`
    let secondFormat = `${seconds > 0 ? seconds + ' second' : ''}${seconds > 1 ? 's' : ''}${seconds > 0 ? ', ' : ''}`

    let formation = (data) => {
        let lastlyStage = data.slice(0, data.length - 2).split(", ")

        switch (lastlyStage.length) {
            case 1:
                return lastlyStage.join("");        
            case 2:
                return `${lastlyStage[0]} and ${lastlyStage[1]}`
            case 3:
                return `${lastlyStage[0]}, ${lastlyStage[1]} and ${lastlyStage[2]}`
            case 4:
                return `${lastlyStage[0]}, ${lastlyStage[1]}, ${lastlyStage[2]} and ${lastlyStage[3]}`
            case 5:
                return `${lastlyStage[0]}, ${lastlyStage[1]}, ${lastlyStage[2]}, ${lastlyStage[3]} and ${lastlyStage[4]}`
            default:
                return lastlyStage.join(" ")
        }
    }
    return formation(`${yearFormat}${dayFormat}${hourFormat}${minuteFormat}${secondFormat}`)
}

