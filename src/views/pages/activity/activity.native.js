import React from 'react'
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native'

import Transaction from '@components/transaction'

const account = {
  account: 'nano_3x4ui45q1cw8hydmfdn4ec5ijsdqi4ryp14g4ayh71jcdkwmddrq7ca9xzn9',
  history: [
    {
      type: 'receive',
      account:
        'nano_3eopkc541w3cfhnbd8nknqhe1fpda19nr56wicod1rnwqe39pnxjrifcs1if',
      amount: '69000000000000000000000000',
      amount_decimal: '0.000069',
      local_timestamp: '1613552777',
      height: '37',
      hash: '015519F4AB1A025FF879887988356D0F22A62D8F980C8B1860704F12D71F6409'
    },
    {
      type: 'receive',
      account:
        'nano_3free1e7rj9wum343fczfg48cbqexmckyj8e3n9x4399eyhj6zamunor1z3t',
      amount: '100000000000000000000000000',
      amount_decimal: '0.0001',
      local_timestamp: '1613524303',
      height: '36',
      hash: '1E2C33C7A3C614534AF636ADCBFDA66D875F4F883C0B39EBC4EB204AEA69F992'
    },
    {
      type: 'receive',
      account:
        'nano_34prihdxwz3u4ps8qjnn14p7ujyewkoxkwyxm3u665it8rg5rdqw84qrypzk',
      amount: '1541000000000000000000000000',
      amount_decimal: '0.001541',
      local_timestamp: '1613523618',
      height: '34',
      hash: 'C4AAD3FFA808BC7F429C55466806692EA54D7B33845547B87110CCAA2B900C72'
    },
    {
      type: 'receive',
      account:
        'nano_3bgfqdzh6kcpysiqczsiox6zufnj7bdtqndt9e4wgbjo4pdwp7irdrnz5inm',
      amount: '10000000000000000000000000',
      amount_decimal: '0.00001',
      local_timestamp: '1607265299',
      height: '27',
      hash: 'D54D6C2B9DBE15E33DD4D7BB7C5F300431EF3B2699D0DC634AF1DB9C76B3F612'
    },
    {
      type: 'receive',
      account:
        'nano_14cuejfpr58epnpxenirusimsrbwxbecin7a3izq1injptecc31qsjwquoe6',
      amount: '4000000000000000000000000000000000000',
      amount_decimal: '4000000.0',
      local_timestamp: '1607265290',
      height: '26',
      hash: 'DB3FF8B3D6A4E556378A9751595953AEF540748290FA848A203A8124EC47D661'
    },
    {
      type: 'send',
      account:
        'nano_3jwrszth46rk1mu7rmb4rhm54us8yg1gw3ipodftqtikf5yqdyr7471nsg1k',
      amount: '2000000000000343948788377739913879387',
      amount_decimal: '2000000.000000343948788377739913879387',
      local_timestamp: '1607265186',
      height: '25',
      hash: '41FFA433A23AC4EA10CFF3608AB703C79726252D6B787C907DC9CA04580EBF9A'
    },
    {
      type: 'receive',
      account:
        'nano_1keyfkcd77sjpkcm6ie4g6waa1bw5xtyy37u1igar7zqponiwk6rj75uipy5',
      amount: '1',
      amount_decimal: '0.000000000000000000000000000001',
      local_timestamp: '1607265153',
      height: '24',
      hash: '2656EAE462DD2D77B9405E5BA3822D54EDCFFD4D88238BB54FA786A22C7B07F8'
    },
    {
      type: 'receive',
      account:
        'nano_1future1tfuowtj1jc8g9bfknm6y87j4fimrcdcf7pxeuokoat1h4c4sng4o',
      amount: '1000000000000000000000000',
      amount_decimal: '0.000001',
      local_timestamp: '1607265144',
      height: '23',
      hash: '7062CD3934F9B49E654FD73F137EE5F0BB22458C3A0942F3C353BFD39D55E2BD'
    },
    {
      type: 'receive',
      account:
        'nano_14cuejfpr58epnpxenirusimsrbwxbecin7a3izq1injptecc31qsjwquoe6',
      amount: '4000000000000000000000000000000000000',
      amount_decimal: '4000000.0',
      local_timestamp: '1607265137',
      height: '22',
      hash: '05C8822D588216B6CD63AD468E5BACDB1B4110574C6A919D7303D5F2F858F2BB'
    },
    {
      type: 'receive',
      account:
        'nano_1u7dbcwn97ueh6qigi38hfm6g7e76n7ascfsymka1o1otprnkoaheuiu4cy7',
      amount: '1000000000000000000000000000',
      amount_decimal: '0.001',
      local_timestamp: '1607265070',
      height: '21',
      hash: '7672C065946A40736FDA237E69264BE04F638A320FC97FAFAA3C525F7CB9D43C'
    },
    {
      type: 'receive',
      account:
        'nano_3bgfqdzh6kcpysiqczsiox6zufnj7bdtqndt9e4wgbjo4pdwp7irdrnz5inm',
      amount: '10000000000000000000000000',
      amount_decimal: '0.00001',
      local_timestamp: '1607265062',
      height: '20',
      hash: '6D225998186AC01E896C0A66BAA4D3DC28259094F8534740D56CA53EE578E8BD'
    },
    {
      type: 'receive',
      account:
        'nano_14cuejfpr58epnpxenirusimsrbwxbecin7a3izq1injptecc31qsjwquoe6',
      amount: '6888717756773343948788377739913879387',
      amount_decimal: '6888717.756773343948788377739913879387',
      local_timestamp: '1607265053',
      height: '19',
      hash: '7CC3231BA08B3C2C3C406A89EF569D0C750F48B7B73B81D8102A15983B85AE62'
    },
    {
      type: 'receive',
      account:
        'nano_3h3axo5d3n5k4yxgidnbktews1c1t4jyagkit53j6yiyxxpmxsbqob1i1bz7',
      amount: '10000000000000000000000000000',
      amount_decimal: '0.01',
      local_timestamp: '1607265043',
      height: '18',
      hash: '97FF26C767845EE3F94061FC0405F9E2760B16040026A273F7E3F2E159239ADA'
    },
    {
      type: 'receive',
      account:
        'nano_3bgfqdzh6kcpysiqczsiox6zufnj7bdtqndt9e4wgbjo4pdwp7irdrnz5inm',
      amount: '10000000000000000000000000',
      amount_decimal: '0.00001',
      local_timestamp: '1607264442',
      height: '17',
      hash: '5AD7C5E0098A00226D91C1075D0991F68F4101EF9A42023D454BD39D1AFF2FC9'
    },
    {
      type: 'receive',
      account:
        'nano_3bgfqdzh6kcpysiqczsiox6zufnj7bdtqndt9e4wgbjo4pdwp7irdrnz5inm',
      amount: '10000000000000000000000000',
      amount_decimal: '0.00001',
      local_timestamp: '1607264433',
      height: '16',
      hash: '352DFE2E65DDA55A9160A0D8D53FD044907FB90F4B989351D42D0F94268B9F0F'
    },
    {
      type: 'send',
      account:
        'nano_3jwrszth46rk1mu7rmb4rhm54us8yg1gw3ipodftqtikf5yqdyr7471nsg1k',
      amount: '485583824306000000000000000000000000',
      amount_decimal: '485583.824306',
      local_timestamp: '1591401504',
      height: '14',
      hash: 'D7B1B764399B3417BC1220C602A9608D9C883CF2064EA481E14152813F3A6B9E'
    },
    {
      type: 'send',
      account:
        'nano_3jwrszth46rk1mu7rmb4rhm54us8yg1gw3ipodftqtikf5yqdyr7471nsg1k',
      amount: '2000000000000000000000000000000000000',
      amount_decimal: '2000000.0',
      local_timestamp: '1574084399',
      height: '13',
      hash: '707CAA0DBEB16C486EE37C03409D663ACE501D2985CC72ACD6903CECACF3189C'
    },
    {
      type: 'send',
      account:
        'nano_3jwrszth46rk1mu7rmb4rhm54us8yg1gw3ipodftqtikf5yqdyr7471nsg1k',
      amount: '400000000000000000000000000000000000',
      amount_decimal: '400000.0',
      local_timestamp: '1573811711',
      height: '12',
      hash: '56569C595ED2AAD44D7F7A51160B6173B02223DFC5515673B0008F554F8B6519'
    },
    {
      type: 'send',
      account:
        'nano_3jwrszth46rk1mu7rmb4rhm54us8yg1gw3ipodftqtikf5yqdyr7471nsg1k',
      amount: '300000000000000000000000000000000000',
      amount_decimal: '300000.0',
      local_timestamp: '1573773108',
      height: '11',
      hash: '3FC82DC0BBC7A49283D135C52E18244941D443DEB8C02B0A656BFB2C149EB2E5'
    },
    {
      type: 'send',
      account:
        'nano_3jwrszth46rk1mu7rmb4rhm54us8yg1gw3ipodftqtikf5yqdyr7471nsg1k',
      amount: '400000000000007345764011035850609487',
      amount_decimal: '400000.000000007345764011035850609487',
      local_timestamp: '1572962481',
      height: '10',
      hash: '00216358247619748B7D3D706BE90E3923A343F36BA60FD5F3BAB4B13D33B0A0'
    },
    {
      type: 'send',
      account:
        'nano_3jwrszth46rk1mu7rmb4rhm54us8yg1gw3ipodftqtikf5yqdyr7471nsg1k',
      amount: '200000000000000000000000000000000000',
      amount_decimal: '200000.0',
      local_timestamp: '1571666717',
      height: '9',
      hash: '1C067C141BC3B74B02EC1549DB5CBDFEF6E160793D1FD94F43515F50EE76A601'
    },
    {
      type: 'send',
      account:
        'nano_3jwrszth46rk1mu7rmb4rhm54us8yg1gw3ipodftqtikf5yqdyr7471nsg1k',
      amount: '400000000000000000000000000000000000',
      amount_decimal: '400000.0',
      local_timestamp: '1571376870',
      height: '8',
      hash: '1085C10015254C8954F92EEA5525F4D29B7441DF9B3AC68B7C692798021FC388'
    },
    {
      type: 'send',
      account:
        'nano_3jwrszth46rk1mu7rmb4rhm54us8yg1gw3ipodftqtikf5yqdyr7471nsg1k',
      amount: '600000000000000000000000000000000000',
      amount_decimal: '600000.0',
      local_timestamp: '1569749069',
      height: '7',
      hash: 'CC56A2B3130EA5D34156A95F9138A4C88F720871A278C9DBD805AB189E964903'
    },
    {
      type: 'send',
      account:
        'nano_3jwrszth46rk1mu7rmb4rhm54us8yg1gw3ipodftqtikf5yqdyr7471nsg1k',
      amount: '200000000000000000000000000000000000',
      amount_decimal: '200000.0',
      local_timestamp: '1569741273',
      height: '6',
      hash: 'DF7A4363F543C26FCAFB56D859FDA3FD23D3B3019914768F1A31F06945920564'
    },
    {
      type: 'receive',
      account:
        'nano_3xinwsdt57qo5bcysock15do87r9fuepq84erab5udm6wekymq9e9tiin8hw',
      amount: '6000000000000000000000000000000',
      amount_decimal: '6.0',
      local_timestamp: '1569741261',
      height: '5',
      hash: 'BDE3F2036213541EB771E0CB27BC012C7F34DE29D73132B9556F6B70710E350C'
    },
    {
      type: 'send',
      account:
        'nano_3jwrszth46rk1mu7rmb4rhm54us8yg1gw3ipodftqtikf5yqdyr7471nsg1k',
      amount: '200000000000000000000000000000000000',
      amount_decimal: '200000.0',
      local_timestamp: '1569479594',
      height: '4',
      hash: '1D6ADCAA350E63A38FCB12EC3B810580C22050D0FA0CB4BCDDFA62B8D3454EE9'
    },
    {
      type: 'receive',
      account:
        'nano_14cuejfpr58epnpxenirusimsrbwxbecin7a3izq1injptecc31qsjwquoe6',
      amount: '5185355824306007345764011035850609487',
      amount_decimal: '5185355.824306007345764011035850609487',
      local_timestamp: '1568806531',
      height: '3',
      hash: 'B42BDCE82B55BEB0602C1E374B8A14CE13A153A6E757CD832013E0A603E640F4'
    },
    {
      type: 'send',
      account:
        'nano_3jwrszth46rk1mu7rmb4rhm54us8yg1gw3ipodftqtikf5yqdyr7471nsg1k',
      amount: '666000000000000000000000000000000',
      amount_decimal: '666.0',
      local_timestamp: '1568805189',
      height: '2',
      hash: 'AC08696267C4DB72C03AB3F4309C7C3268D79B8945C02B2BA262DE724707FB7B'
    },
    {
      type: 'receive',
      account:
        'nano_14cuejfpr58epnpxenirusimsrbwxbecin7a3izq1injptecc31qsjwquoe6',
      amount: '888000000000000000000000000000000',
      amount_decimal: '888.0',
      local_timestamp: '1568805079',
      height: '1',
      hash: '0EF9B910283D2D72ACA1E40C6363633E59E0405B60FD6B98F722D2FD60A9F73B'
    }
  ]
}

export default function () {
  const renderItem = ({ item }) => <Transaction transaction={item} />

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={account.history}
        renderItem={renderItem}
        keyExtractor={(item) => item.hash}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  }
})
