exports.AverageAge = (racingFans) => {
    const { length } = racingFans;
    return racingFans.reduce((acc, val) => {
        return acc + (val.age / length);
    }, 0);
}

exports.MaxAge = (racingFans) => {
    return racingFans.reduce((acc, val) => {
        //console.log(`acc ${acc.age} - val ${val.age}`)
        if(acc.age<val.age){return val.age}else{return acc};
    });
}

exports.MinAge = (racingFans) => {
    return racingFans.reduce((acc, val) => {
        //console.log(`acc ${acc.age} - val ${val.age}`)
        if(acc.age>val.age){return val.age}else{return acc};
    });
}