from datetime import datetime, timedelta
from itertools import accumulate

import matplotlib.pyplot as plt
from matplotlib.widgets import Button
from matplotlib import rcParams


# =========================
# Settings
# =========================
INTERVAL_MS = 100  # 0.1초


# =========================
# Font setting
# =========================
rcParams["font.sans-serif"] = [
    "Malgun Gothic",
    "AppleGothic",
    "Noto Sans CJK KR",
    "DejaVu Sans",
]
rcParams["axes.unicode_minus"] = False


# =========================
# Data
# =========================
data = [
    {"date": "2026-05-25", "daily": 1, "titles": ["Daily Pieces 프로젝트 기획"]},
    {
        "date": "2026-05-26",
        "daily": 2,
        "titles": ["The Cabinet of Lost Thoughts", "GitHub Pages 배포 완료"],
    },
    {"date": "2026-05-27", "daily": 1, "titles": ["The Museum of Tiny Errors"]},
    {"date": "2026-05-28", "daily": 1, "titles": ["The Garden of Sleeping Stars"]},
    {"date": "2026-05-29", "daily": 1, "titles": ["The City of Many Minds"]},
    {"date": "2026-05-30", "daily": 1, "titles": ["The Archive at the End of Time"]},
    {"date": "2026-05-31", "daily": 1, "titles": ["The Lake That Holds the Moon"]},
    {"date": "2026-06-01", "daily": 1, "titles": ["A Well-Balanced Study Day"]},
    {"date": "2026-06-02", "daily": 1, "titles": ["The Forest of Depth-First Paths"]},
    {"date": "2026-06-03", "daily": 1, "titles": ["The Gate of the Silent Tower"]},
    {
        "date": "2026-06-04",
        "daily": 2,
        "titles": [
            "The Silent Tower - Episode 02: The First Guardian",
            "Moonlit Sleepy Cat",
        ],
    },
    {
        "date": "2026-06-05",
        "daily": 1,
        "titles": ["The Silent Tower - Episode 03: The Lantern Serpent"],
    },
    {
        "date": "2026-06-06",
        "daily": 1,
        "titles": ["The Silent Tower - Episode 04: The Mirror-Winged Beast"],
    },
    {"date": "2026-06-07", "daily": 0, "titles": []},
    {"date": "2026-06-08", "daily": 0, "titles": []},
    {"date": "2026-06-09", "daily": 0, "titles": []},
    {
        "date": "2026-06-10",
        "daily": 1,
        "titles": ["The Silent Tower - Episode 05: The Chronomancer Warden"],
    },
    {
        "date": "2026-06-11",
        "daily": 1,
        "titles": [
            "The Silent Tower - Episode 06: The Ashen Dragon of the Broken Constellation"
        ],
    },
]


# =========================
# Preprocess
# =========================
dates = [datetime.strptime(item["date"], "%Y-%m-%d") for item in data]
daily_counts = [item["daily"] for item in data]
cumulative_counts = list(accumulate(daily_counts))

start_date = dates[0]
max_count = max(cumulative_counts)


# =========================
# Colors
# =========================
BG = "#0f172a"
PANEL = "#111827"
GRID = "#334155"
TEXT = "#e5e7eb"
SUBTEXT = "#94a3b8"
LINE = "#38bdf8"
POINT = "#facc15"
GREEN = "#34d399"
RED = "#fb7185"
BUTTON_BG = "#1e293b"
BUTTON_HOVER = "#334155"


# =========================
# Figure layout
# =========================
fig = plt.figure(figsize=(14, 8), facecolor=BG)

# main chart area
ax = fig.add_axes([0.075, 0.205, 0.86, 0.56])
ax.set_facecolor(PANEL)

# restart button area
button_ax = fig.add_axes([0.78, 0.065, 0.13, 0.055])
restart_button = Button(
    button_ax,
    "Restart",
    color=BUTTON_BG,
    hovercolor=BUTTON_HOVER,
)

restart_button.label.set_color(TEXT)
restart_button.label.set_fontsize(11)
restart_button.label.set_fontweight("bold")

for spine in button_ax.spines.values():
    spine.set_edgecolor(GRID)
    spine.set_linewidth(1.2)


# =========================
# Static header texts
# =========================
title_text = fig.text(
    0.075,
    0.915,
    "Daily Pieces",
    color=TEXT,
    fontsize=30,
    fontweight="bold",
    ha="left",
    va="center",
)

subtitle_text = fig.text(
    0.075,
    0.865,
    "Cumulative creation count over time",
    color=SUBTEXT,
    fontsize=14,
    ha="left",
    va="center",
)

count_text = fig.text(
    0.845,
    0.890,
    "0",
    color=POINT,
    fontsize=36,
    fontweight="bold",
    ha="right",
    va="center",
)

pieces_text = fig.text(
    0.855,
    0.890,
    "pieces",
    color=SUBTEXT,
    fontsize=14,
    ha="left",
    va="center",
)

footer_text = fig.text(
    0.075,
    0.070,
    "Includes related project outputs such as planning and GitHub Pages deployment.",
    color=SUBTEXT,
    fontsize=10,
    ha="left",
    va="center",
)


# =========================
# Animation state
# =========================
state = {
    "frame": 1,
    "running": False,
}


# =========================
# Draw frame
# =========================
def draw_frame(frame):
    ax.clear()
    ax.set_facecolor(PANEL)

    current_idx = frame - 1

    visible_dates = dates[:frame]
    visible_counts = cumulative_counts[:frame]

    current_date = dates[current_idx]
    current_total = cumulative_counts[current_idx]
    current_daily = daily_counts[current_idx]

    # x-axis expands as time passes
    if current_date == start_date:
        x_right = start_date + timedelta(days=1)
    else:
        x_right = current_date + timedelta(days=0.65)

    ax.set_xlim(start_date - timedelta(days=0.45), x_right)
    ax.set_ylim(0, max_count + 2)

    # show only first date and current last date on x-axis
    if current_date == start_date:
        ax.set_xticks([start_date])
        ax.set_xticklabels([start_date.strftime("%m/%d")])
    else:
        ax.set_xticks([start_date, current_date])
        ax.set_xticklabels([
            start_date.strftime("%m/%d"),
            current_date.strftime("%m/%d"),
        ])

    # grid
    ax.grid(True, color=GRID, alpha=0.32, linewidth=0.8)

    # remove border
    for spine in ax.spines.values():
        spine.set_visible(False)

    # axis style
    ax.set_xlabel("Date", color=SUBTEXT, fontsize=13, labelpad=16)
    ax.set_ylabel("Cumulative pieces", color=SUBTEXT, fontsize=13, labelpad=16)
    ax.tick_params(colors=SUBTEXT, labelsize=11, pad=8)

    # area fill
    ax.fill_between(
        visible_dates,
        visible_counts,
        [0] * len(visible_counts),
        color=LINE,
        alpha=0.10,
    )

    # glow line
    ax.plot(
        visible_dates,
        visible_counts,
        linewidth=11,
        color=LINE,
        alpha=0.09,
        solid_capstyle="round",
    )
    ax.plot(
        visible_dates,
        visible_counts,
        linewidth=6,
        color=LINE,
        alpha=0.17,
        solid_capstyle="round",
    )

    # main line
    ax.plot(
        visible_dates,
        visible_counts,
        linewidth=3.0,
        color=LINE,
        marker="o",
        markersize=6.5,
        markerfacecolor=POINT,
        markeredgecolor=BG,
        markeredgewidth=1.5,
        solid_capstyle="round",
    )

    # current point highlight
    ax.scatter(
        [current_date],
        [current_total],
        s=280,
        color=POINT,
        edgecolor=TEXT,
        linewidth=1.6,
        zorder=5,
    )

    # pause label
    if current_daily == 0:
        ax.text(
            current_date,
            current_total + 0.65,
            "pause",
            color=RED,
            fontsize=12,
            fontweight="bold",
            ha="center",
            va="bottom",
        )

    # date badge inside chart
    badge_color = GREEN if current_daily > 0 else RED
    ax.text(
        0.025,
        0.925,
        current_date.strftime("%Y.%m.%d"),
        transform=ax.transAxes,
        color=TEXT,
        fontsize=13,
        fontweight="bold",
        ha="left",
        va="center",
        bbox=dict(
            boxstyle="round,pad=0.50",
            facecolor=badge_color,
            edgecolor="none",
            alpha=0.22,
        ),
    )

    # update big number
    count_text.set_text(str(current_total))

    fig.canvas.draw_idle()


# =========================
# Timer animation
# =========================
timer = fig.canvas.new_timer(interval=INTERVAL_MS)


def timer_callback():
    if not state["running"]:
        return True

    if state["frame"] > len(data):
        state["running"] = False
        timer.stop()
        return True

    draw_frame(state["frame"])
    state["frame"] += 1
    return True


timer.add_callback(timer_callback)


# =========================
# Restart button
# =========================
def restart_animation(event):
    timer.stop()
    state["frame"] = 1
    state["running"] = True
    draw_frame(1)
    state["frame"] = 2
    timer.start()


restart_button.on_clicked(restart_animation)


# =========================
# Start once
# =========================
draw_frame(1)
state["frame"] = 2
state["running"] = True
timer.start()

plt.show()