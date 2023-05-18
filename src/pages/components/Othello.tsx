import { useEffect, useState } from "react"

import { useTheme } from '../../lib/theme'

export default function Othello() {
    const [table, setTable] = useState<any[][]>()
    const [turn, setTurn] = useState("white")
    const [isPlaying, setPlaying] = useState(true)
    const [notBlank, setNotBlank] = useState(4)
    const [cannotPlace, setCannotPlace] = useState(false)

    const { theme, toggleTheme } = useTheme();

    const initBoard = () => {
        setPlaying(true)
        let r = recentPass
        r.black = false
        r.white = false
        setRecentPass(r)
        
        let arr: string[] = []

        // All outside
        const arr_pattern = []
        for (let i = 0; i < 10; i++) {
            arr = [...arr, "outside"]
        }
        arr_pattern.push(arr)
        // Partially outside
        arr = []
        for (let i = 0; i < 10; i++) {
            if (i == 0 || i == 9) {
                arr = [...arr, "outside"]
            } else {
                arr = [...arr, "blank"]
            }
        }
        arr_pattern.push(arr)

        let arrs = []
        for (let i = 0; i < 10; i++) {
            if (i == 0 || i == 9) {
                arrs.push(arr_pattern[0].slice())
            } else {
                arrs.push(arr_pattern[1].slice())
            }
        }

        arrs[4][4] = "white"
        arrs[5][5] = "white"
        arrs[4][5] = "black"
        arrs[5][4] = "black"

        setTable(arrs)
    }

    useEffect(() => {
        initBoard()
    },[])

    const switchTurn = () => {
        if (turn === "white") {
            setTurn("black")
        } else {
            setTurn("white")
        }
    }

    const [recentPass, setRecentPass] = useState({
        "white": false,
        "black": false,
    })

    const switchPass = () => {
        let r = recentPass
        if (turn === "white") {
            r.white = true
        } else {
            r.black = true
        }
        switchTurn()
        setRecentPass(r)

        if (r.white && r.black) {
            setPlaying(false)
        }
    }

    const getSuperior = () => {
        if (table) {
            const t = table.slice()
            let white = 0
            let black = 0

            t.map((item, _) => {
                item.map((subItem, _) => {
                    if (subItem === "white") white = white + 1
                    if (subItem === "black") black = black + 1
                })
            })

            if (white > black) {
                return "white"
            } else if (white < black) {
                return "black"
            } else {
                return "draw"
            }
        } else {
            return false
        }
    }

    const checkNeighbour = (index: number, subIndex: number) => {
        let isTurnable = false
        const enemy = turn === "white" ? "black" : "white"

        if (table) {
            const t = table.slice()
            if (t[index - 1][subIndex - 1] === enemy) {
                const cells = []
                for (let i = 1;; i++) {
                    const target = t[index - (1 + i)][subIndex - (1 + i)]
                    cells.push([index - i, subIndex - i])
                    if (target === turn) {
                        const t = table.slice()
                        cells.map((i, _) => {
                            t[i[0]][i[1]] = turn
                            setTable(t)
                        })
                        isTurnable = true
                        break
                    }
                    if (target === "outside") {
                        break
                    }
                }
            }
            if (t[index - 1][subIndex] === enemy) {
                const cells = []
                for (let i = 1;; i++) {
                    const target = t[index - (1 + i)][subIndex]
                    cells.push([index - i, subIndex])
                    if (target === turn) {
                        const t = table.slice()
                        cells.map((i, _) => {
                            t[i[0]][i[1]] = turn
                            setTable(t)
                        })
                        isTurnable = true
                        break
                    }
                    if (target === "outside") {
                        break
                    }
                }
            }
            if (t[index][subIndex - 1] === enemy) {
                const cells = []
                for (let i = 1;; i++) {
                    const target = t[index][subIndex - (1 + i)]
                    cells.push([index, subIndex - i])
                    if (target === turn) {
                        const t = table.slice()
                        cells.map((i, _) => {
                            t[i[0]][i[1]] = turn
                            setTable(t)
                        })
                        isTurnable = true
                        break
                    }
                    if (target === "outside") {
                        break
                    }
                }
            }
            if (t[index + 1][subIndex + 1] === enemy) {
                const cells = []
                for (let i = 1;; i++) {
                    const target = t[index + (1 + i)][subIndex + (1 + i)]
                    cells.push([index + i, subIndex + i])
                    if (target === turn) {
                        const t = table.slice()
                        cells.map((i, _) => {
                            t[i[0]][i[1]] = turn
                            setTable(t)
                        })
                        isTurnable = true
                        break
                    }
                    if (target === "outside") {
                        break
                    }
                }
            }
            if (t[index + 1][subIndex] === enemy) {
                const cells = []
                for (let i = 1;; i++) {
                    const target = t[index + (1 + i)][subIndex]
                    cells.push([index + i, subIndex])
                    if (target === turn) {
                        const t = table.slice()
                        cells.map((i, _) => {
                            t[i[0]][i[1]] = turn
                            setTable(t)
                        })
                        isTurnable = true
                        break
                    }
                    if (target === "outside") {
                        break
                    }
                }
            }
            if (t[index][subIndex + 1] === enemy) {
                const cells = []
                for (let i = 1;; i++) {
                    const target = t[index][subIndex + (1 + i)]
                    cells.push([index, subIndex + i])
                    if (target === turn) {
                        const t = table.slice()
                        cells.map((i, _) => {
                            t[i[0]][i[1]] = turn
                            setTable(t)
                        })
                        isTurnable = true
                        break
                    }
                    if (target === "outside") {
                        break
                    }
                }
            }
            if (t[index + 1][subIndex - 1] === enemy) {
                const cells = []
                for (let i = 1;; i++) {
                    const target = t[index + (1 + i)][subIndex - (1 + i)]
                    cells.push([index + i, subIndex - i])
                    if (target === turn) {
                        const t = table.slice()
                        cells.map((i, _) => {
                            t[i[0]][i[1]] = turn
                            setTable(t)
                        })
                        isTurnable = true
                        break
                    }
                    if (target === "outside") {
                        break
                    }
                }
            }
            if (t[index - 1][subIndex + 1] === enemy) {
                const cells = []
                for (let i = 1;; i++) {
                    const target = t[index - (1 + i)][subIndex + (1 + i)]
                    cells.push([index - i, subIndex + i])
                    if (target === turn) {
                        const t = table.slice()
                        cells.map((i, _) => {
                            t[i[0]][i[1]] = turn
                            setTable(t)
                        })
                        isTurnable = true
                        break
                    }
                    if (target === "outside") {
                        break
                    }
                }
            }
        }

        if (isTurnable) {
            let r = recentPass
            if (turn === "white") {
                r.white = false
            } else {
                r.black = false
            }

            setRecentPass(r)
        }
        return isTurnable
    }

    const handleClick = (index: number, subIndex: number) => {
        if (table && isPlaying) {
            let t = table.slice()
            if (t[index][subIndex] === "blank") {
                if (checkNeighbour(index, subIndex)) {
                    t[index][subIndex] = turn
                    setTable(t)
                    switchTurn()
                    setNotBlank(notBlank + 1)
                    if (notBlank >= 61) {
                        setPlaying(false)
                    }
                } else {
                    setCannotPlace(true)
                    setTimeout(() => setCannotPlace(false), 500)
                }
            }else {
                setCannotPlace(true)
                setTimeout(() => setCannotPlace(false), 500)
            }
        }
    }

    return (
        <>
        <div className="row mb-3">
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card">
                    <div className="card-body text-center">
                        <p className="fs-1">{ turn === "white" ? "⬜" : "⬛" }</p>
                        <p className="fs-5 text-muted">ターン</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card">
                    <div className="card-body text-center">
                        <p className="fs-1">{ getSuperior() === "white" ? "⬜" : getSuperior() === "draw" ? "🟩" : "⬛" }</p>
                        <p className="fs-5 text-muted">優勢</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mx-auto" style={{maxWidth: "384px"}}>
        {
            cannotPlace && 
            <div className={`position-absolute alert alert-${theme} text-center`} role="alert">
                そこには置けません 🥺
            </div>
        }
        {   
            !isPlaying && getSuperior() !== "draw" && (
                <div className={`alert alert-${theme} text-center`} role="alert">
                    <span className="d-block">{getSuperior() === "white" ? "白" : "黒"} の勝ちです。</span>
                    <span>もう一度プレイしますか？「ゲームをやり直す」をクリックしてください。</span>
                </div>
            )
        }
        {
            !isPlaying && getSuperior() === "draw" && (
                <div className={`alert alert-${theme} text-center`} role="alert">
                    <span className="d-block">引き分けです。</span>
                    <span>もう一度プレイしますか？「ゲームをやり直す」をクリックしてください。</span>
                </div>
            )
        }
        { table && table.map((items, index) => {
            return (
            <div key={index}>
            {
                items.map((subItem, subIndex) => {
                    if (subItem !== "outside") {
                    const display = (() => {
                        switch (subItem) {
                            case "white":
                                return "⬜" as const
                            case "black":
                                return "⬛" as const
                            default:
                                return "🟩" as const
                        }
                    })() satisfies string

                    return (
                        <button
                            key={subIndex}
                            type="button"
                            className={`btn btn-outline-${ theme === "dark" ? "light" : "dark"}`}
                            onClick={() => handleClick(index, subIndex)}
                        >
                            {display}
                        </button>
                    )
                    }
                }
            )}
            </div>
            )
        })}
        </div>
        <div className="mt-2">
            <button type="button" className="btn btn-outline-warning m-1" onClick={switchPass}>パス</button>
            <button type="button" className="btn btn-outline-warning m-1" onClick={initBoard}>ゲームをやり直す</button>
        </div>
        </>
    )
}
