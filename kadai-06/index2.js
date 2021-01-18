try {
     const str1 = "abc"
     JSON.parse(str1)
} catch (error) {
    // 正しいJSONではないのでパースできない。
    // 文字列だけの JSON は、""で囲む必要がある。
    // 正しくは const str1 = '"abc"' のようなJSON文字列になる。
}

try {
    const str2 = "'abc'"
    JSON.parse(str2)
} catch (error) {
    // JSON での文字列は''ではなく""で囲む必要があるため。
}

const str3 = '"abc"'
JSON.parse(str3)



    const str5 = '{ "a": 123 }'
    JSON.parse(str5)

    try {
        const str6 = '{ a: 123 }'
        JSON.parse(str6)
    } catch (error) {
        console.log(error)
        // JSON のキーは""で囲む必要があるため。
    }