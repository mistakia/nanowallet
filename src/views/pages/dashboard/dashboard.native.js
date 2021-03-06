import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import { BigNumber } from 'bignumber.js'

import { Grid, Section, Block } from 'react-native-responsive-layout'

function representativeStatus(stats) {
  if (!stats.representativeLastVoted) {
    return <Text>--</Text>
  }

  const d = moment(stats.representativeLastVoted)
  if (d.isBefore(moment().subtract('1', 'day'))) {
    return <View style={styles.offline} />
  } else {
    return <View style={styles.online} />
  }
}

function lastVoted(stats) {
  if (!stats.representativeLastVoted) {
    return <Text>--</Text>
  }

  const d = moment(stats.representativeLastVoted)
  return <Text>{d.fromNow(false)}</Text>
}

function uptime(stats) {
  if (!stats.representativeUptime30d) {
    return <Text>--</Text>
  }

  return <Text>{Math.round(stats.representativeUptime)}%</Text>
}

function ninjaScore(stats) {
  if (!stats.representativeNinjaScore) {
    return <Text>--</Text>
  }

  return <Text>{stats.representativeNinjaScore}</Text>
}

function weight(stats) {
  if (!stats.representativeWeight) {
    return <Text>--</Text>
  }

  const b = new BigNumber(stats.representativeWeight)

  return <Text>{b.shiftedBy(-30).toFormat(0)}</Text>
}

function latency(stats) {
  if (!stats.representativeLatency) {
    return <Text>--</Text>
  }

  return <Text>{stats.representativeLatency}</Text>
}

function networkVolume(stats) {
  if (!stats.networkConfirmations24h) {
    return <Text>--</Text>
  }

  const b = new BigNumber(stats.networkConfirmations24h)

  return <Text>{b.toFormat()}</Text>
}

function liquidity(stats) {
  if (!stats.bidTotal || !stats.askTotal) {
    return <Text>--</Text>
  }

  const b = new BigNumber(stats.bidTotal + stats.askTotal)
  return <Text>{b.toFormat(0)}</Text>
}

function exchangeVolume(stats) {
  if (!stats.marketVolume24) {
    return <Text>--</Text>
  }

  const b = new BigNumber(stats.marketVolume24)
  return <Text>{b.toFormat(0)}</Text>
}

function marketCap(stats) {
  if (!stats.circulatingSupply || !stats.currentPrice) {
    return <Text>--</Text>
  }

  const b = new BigNumber(stats.circulatingSupply).multipliedBy(
    stats.currentPrice
  )

  return <Text>{b.toFormat(0)}</Text>
}

function volMktCap(stats) {
  if (
    !stats.circulatingSupply ||
    !stats.currentPrice ||
    !stats.marketVolume24
  ) {
    return <Text>--</Text>
  }

  const b =
    (stats.marketVolume24 / (stats.circulatingSupply * stats.currentPrice)) *
    100

  return <Text>{b.toFixed(2)}%</Text>
}

function confirmationsPerSecond(stats) {
  if (!stats.networkConfirmationsPerSecond) {
    return <Text>--</Text>
  }
}

function confirmationTime(stats) {
  if (!stats.networkAvgConfirmationTime) {
    return <Text>--</Text>
  }
}

function difficulty(stats) {
  if (!stats.networkDifficulty) {
    return <Text>--</Text>
  }
}

function principalRepresentatives(stats) {
  if (!stats.networkPrincipleRepresentativesOnline) {
    return <Text>--</Text>
  }
}

function onlineStake(stats) {
  if (!stats.networkOnlineStake) {
    return <Text>--</Text>
  }
}

export default function () {
  const { stats } = this.props
  return (
    <Grid scrollable stretchable>
      <Section>
        <Block>
          <Grid stretchable>
            <Section>
              <Block>
                <Text style={styles.header}>Representative</Text>
              </Block>
            </Section>
            <Section>
              <Block xsSize='50%'>
                <View style={styles.cell}>
                  <Text style={styles.key}>Status</Text>
                  <Text style={styles.value}>
                    {representativeStatus(stats)}
                  </Text>
                </View>
              </Block>
              <Block xsSize='50%'>
                <View style={styles.cell}>
                  <Text style={styles.key}>Last Voted</Text>
                  <Text style={styles.value}>{lastVoted(stats)}</Text>
                </View>
              </Block>
            </Section>
            <Section>
              <Block xsSize='50%'>
                <View style={styles.cell}>
                  <Text style={styles.key}>Weight</Text>
                  <Text style={styles.value}>{weight(stats)}</Text>
                </View>
              </Block>
              <Block xsSize='50%'>
                <View style={styles.cell}>
                  <Text style={styles.key}>Latency</Text>
                  <Text style={styles.value}>{latency(stats)}</Text>
                </View>
              </Block>
            </Section>
            <Section>
              <Block xsSize='50%'>
                <View style={styles.cell}>
                  <Text style={styles.key}>Uptime</Text>
                  <Text style={styles.value}>{uptime(stats)}</Text>
                </View>
              </Block>
              <Block xsSize='50%'>
                <View style={styles.cell}>
                  <Text style={styles.key}>Ninja Score</Text>
                  <Text style={styles.value}>{ninjaScore(stats)}</Text>
                </View>
              </Block>
            </Section>

            <Section>
              <Block>
                <Text style={styles.header}>Exchange</Text>
              </Block>
            </Section>
            <Section>
              <Block xsSize='50%'>
                <View style={styles.cell}>
                  <Text style={styles.key}>Mkt Cap</Text>
                  <Text style={styles.value}>{marketCap(stats)}</Text>
                </View>
              </Block>
              <Block xsSize='50%'>
                <View style={styles.cell}>
                  <Text style={styles.key}>Liquidity</Text>
                  <Text style={styles.value}>{liquidity(stats)}</Text>
                </View>
              </Block>
            </Section>
            <Section>
              <Block xsSize='50%'>
                <View style={styles.cell}>
                  <Text style={styles.key}>Vol (24h)</Text>
                  <Text style={styles.value}>{exchangeVolume(stats)}</Text>
                </View>
              </Block>
              <Block xsSize='50%'>
                <View style={styles.cell}>
                  <Text style={styles.key}>Vol/Mkt Cap</Text>
                  <Text style={styles.value}>{volMktCap(stats)}</Text>
                </View>
              </Block>
            </Section>

            <Section>
              <Block>
                <Text style={styles.header}>Network</Text>
              </Block>
            </Section>
            <Section>
              <Block xsSize='50%'>
                <View style={styles.cell}>
                  <Text style={styles.key}>CPS</Text>
                  <Text style={styles.value}>
                    {confirmationsPerSecond(stats)}
                  </Text>
                </View>
              </Block>
              <Block xsSize='50%'>
                <View style={styles.cell}>
                  <Text style={styles.key}>Conf. Time</Text>
                  <Text style={styles.value}>{confirmationTime(stats)}</Text>
                </View>
              </Block>
            </Section>
            <Section>
              <Block xsSize='50%'>
                <View style={styles.cell}>
                  <Text style={styles.key}>Difficulty</Text>
                  <Text style={styles.value}>{difficulty(stats)}</Text>
                </View>
              </Block>
              <Block xsSize='50%'>
                <View style={styles.cell}>
                  <Text style={styles.key}>Vol (24h)</Text>
                  <Text style={styles.value}>{networkVolume(stats)}</Text>
                </View>
              </Block>
            </Section>
            <Section>
              <Block xsSize='50%'>
                <View style={styles.cell}>
                  <Text style={styles.key}>Prin. Reps</Text>
                  <Text style={styles.value}>
                    {principalRepresentatives(stats)}
                  </Text>
                </View>
              </Block>
              <Block xsSize='50%'>
                <View style={styles.cell}>
                  <Text style={styles.key}>Online Stake</Text>
                  <Text style={styles.value}>{onlineStake(stats)}</Text>
                </View>
              </Block>
            </Section>
          </Grid>
        </Block>
      </Section>
    </Grid>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4,
    paddingTop: 30
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
    margin: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  key: {
    color: 'rgba(0,0,0,0.5)'
  },
  value: {},

  online: {
    backgroundColor: 'green',
    height: 10,
    width: 10,
    borderRadius: 10
  },
  offline: {
    backgroundColor: 'red',
    height: 10,
    width: 10,
    borderRadius: 10
  }
})
